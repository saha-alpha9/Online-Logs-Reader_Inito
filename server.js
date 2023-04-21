
import fs from 'fs';
import express from 'express';
import http from 'http';
import {Server} from 'socket.io';


/*
    Web Server
    -- Express web frame to serve static files,
    and socket.io to serve realtime data
*/
const app = express();                      //create express app
const server = http.createServer(app);      //create http server, and add the express app to it
const websocketServer = new Server(server); //create socket.io server , and add the http server to it
app.use(express.static('client'));          //server static files from the client folder

const logFilePath = 'log.txt';

/*
RealTime Log Reader
    --socket.io broadcast to send the data to all connected clients #Technical Challenge 1(for real time connection and broadcast)
    --fs.watchFile to watch the log file fro changes  #Technical challenge 2
    --fs.createReadStream to read the file from the last read position
    --interval: 500 to read the file every 500ms
*/

fs.watchFile(logFilePath, {interval: 500}, (currentStats, previousStats) =>{

    // if data has been deleted from the file , return 
    if(previousStats.size >currentStats.size) return;

    // readStream to read the file 
    const readStream = fs.createReadStream('log.txt',{start:previousStats.size, end: currentStats.size});

    readStream.on('data', (chunk)=> {
        const data = chunk.toString().trim();
        websocketServer.emit('logs', data); //broadcast the data to all connected clients
    });

});

server.listen(3000, ()=> {
    console.log('listening on*:3000');
    console.log('open http://localhost:3000 in the browser')
});



