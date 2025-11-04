const http = require("http");
const fs = require("fs");
const url = require("url");
const myserver = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url} New request \n`;
    const myurl = url.parse(req.url,true);
    console.log(myurl)
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myurl.pathname){
            case '/':
                res.end("This is the homepage");
                break;
            case '/about':
                res.end("This is the about page");
                break;
            case '/contact':
                res.end("This is the contact page");
                break;
            case '/search':
                res.end("This is the search page and your search query is "+ myurl.query.q);
            default:
                res.end("404 page not found");
                break;
            
        }
    })
    // console.log("server started")
})

myserver.listen(8000,()=>    console.log("server is listening on port 8000"));