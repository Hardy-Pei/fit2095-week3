// let http = require('http');
// http.createServer(function(req,res) {
//     if (req.method == "GET") {
//         if (req.url == "/") {
//             // send back the home page
//         } else if(req.url =="/about") {
//             // send the page
//         }
//     } else if (req.method == "POST") {
//         // something
//     }
// }).listen(8080);

let express = require('express');

let app = express();
app.get("/",function(req, res) {
    res.send("Hello to my first express app!!");
});

app.get("/about",function(req, res) {
    res.send("This is the about page!!");
});

app.get("/about/contactUs",function(req, res) {
    res.send("This is the contact page!!");
});

// app.post("/calc",function(req,res) {

// });

app.get("/wiki/:keyword/fit2095/:id", function(req,res) {
    console.log((req.url));
    console.log(req.params);
})

app.get("/report", function(req, res) {
    console.log((req.url));
    console.log(req.query);
    console.log(req.query.name);
    
})

app.listen(8080);
