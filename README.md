# Online-Logs-Reader_Inito

Feature Requirement 
- Build an online logs reader that is capable of the following things 
- It should read text from a file from a file which is present on the server and show it on the client side.
- The text file should be on the server side.
- Additions to the file will always be in append mode , viz. only new lines will added, no previously written element will change 
- Any addition on the file should be replicated on the client side
- The process of showing up any new change in the file to the server should be as realtime as possible


Definition of server
- A remote computer   which contains a file where logs are getting written to.
- For development and for this assignment you can assume server to be a process running on the local system and has access to a file where logs (text) is getting written


Definition of client 
- One or more computers/systems which can establish connection to the server.
- having a visual interface ( website / printing on the terminal ) to stream the logs that it is getting from the server


Assumptions 
- Only text will be added to the file and nothing is likely to be removed
- The size of the file will be growing and eventually will be very big
- Loading the entire file to memory at any point will cause memory to be filled up. Hint: consider reading in chunks


Major Technical issues to solve 
- How to establish a connection between client and server ?
- There are multiple correct ways of doing this. As per the requirements the data transfer should be as real time as possible. Also polling is a bad idea.
- How to know that something is added to the file ?
- How to make sure that only the newly added text is sent to the client ?
- Since the file is too big you can’t read the whole file everytime
