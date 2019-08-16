let http = require("http");
let fs = require("fs");
let urlParse = require("url");
const {
    parse
} = require("querystring");

http.createServer(function (request, response) {
    var filePath = "./index.html";
    const {
        url
    } = request;
    let pathName = urlParse.parse(url, true).pathname;
    if (pathName === "/" && ) {
        fs.readFile(filePath, function (error, content) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(content, 'utf-8');
        })
    } else if (pathName === '/login') {
        if (request.method === 'POST') {
            console.log("We got POST method");
            let body = '';
            request.on('data', chunk => {                
                body += chunk.toString();
            });
            
            request.on('end', () => {
                let items = parse(body);
                if (items.username === 'admin' && items.password === 'pass') {
                    filePath = "./mainpage.html";
                    fs.readFile(filePath, function (error, content) {
                        response.writeHead(200, {
                            'Content-Type': 'text/html'
                        });
                        response.end(content, 'utf-8');
                    })
                } else {
                    filePath = "./accessdenied.html";
                    fs.readFile(filePath, function (error, content) {
                        response.writeHead(404, {
                            'Content-Type': 'text/html'
                        });
                        response.end(content, 'utf-8');
                    })
                }

            })
        } else {
                    filePath = "./accessdenied.html";
                    fs.readFile(filePath, function (error, content) {
                        response.writeHead(404, {
                            'Content-Type': 'text/html'
                        });
                        response.end(content, 'utf-8');
                    })
                }

    } else {
        response.end();
    }

}).listen(8080);