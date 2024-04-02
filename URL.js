// uniform resource locator
// https://www.manavsharma.dev/
/**
 http = protocol:
 it is a set of rule.
 www.manavsharma.dev = Domain - user friendly Name of IP adrress.
 IP adress = 2404:6800:4002:82d::200e
 URL is a user friendly name of IP address
 query = localhost:8000/about?myname=manav.
 */
const http = require('http');
const fs = require('fs');
const url = require('url');
const myserver = http.createServer((req,resp)=>{
    if(req.url === '/favicon.ico') return resp.end();
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    const url1 =  url.parse(req.url, true);
    console.log(url1);
    fs.appendFile("output4.txt",log, (err,data)=>{
        switch(url1.pathname){
            case "/":
                resp.end("Howmpage");
                break;
            case "/about":
                const username =  url1.query.myname;
                resp.end(`Hi Everyone ${username}`);
                break;
            case "/search":
                const search = url1.query.search_query;
                resp.end("Here aer your result for" +search);
            default:
                resp.end("404 NOT FOUND");
        }
    });
});

myserver.listen(8000, () => console.log("Server is Started"));
