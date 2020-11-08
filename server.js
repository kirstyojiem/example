//import a module
const http = require('http');

//where is the server?
//streetname
const hostname = '127.0.0.1';
//house number
const port = 3000;

//create server
const server = http.createServer( (req,res) => {
    //set status code
    res.statusCode = 200;
    //set header
    res.setHeader('Content-Type', 'text/plain');
    //end response with message 
    res.end('Hello World');
});
//request
//send a response


//set up the server listen
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);

});