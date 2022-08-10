//creating a server --. require a http module
const http = require('http');
const fs = require('fs');
const _ =  require('lodash');

//method that creates a server
 const server = http.createServer((req, res) => {

     //lodash module
    const num = _.random(0, 20);
    console.log(num);
    
    const greet = _.once(()=> {
        console.log('hello');
    });
    
    greet();
    greet();

//set header content type
res.setHeader('content-Type', 'text/html');


//using a switch statement to figure out what url a user has visited
let path = './views/';
switch(req.url) {
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
    case '/about-me':
        res.statusCode = 301;  //redirect by changing the status code(301) which means the resource being accessd has been permanently moved
        res.setHeader('Location', '/about'); //actual redirect 
        res.end();
        break;
    default:
        path += '404.html';
        res.statusCode = 404;
        break;
}



//send a html file
fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
           // res.write(data);
            res.end(data);
        }
    })
});

 // listening method has the port number, localhost name and a fuction which fires when we start listening
server.listen(3000, 'localhost',  () => {
     console.log('Listening for requests on port 3000');
 });
