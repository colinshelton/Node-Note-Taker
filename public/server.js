// Requiure dependencies

const http = require("http");
const fs = require("fs");

// Set Port 
const PORT = process.env.PORT || 3001

app.get("/", function (req, res) {
    res.json(path.join(__dirname, "/index.html"));
});

// Start App 
app.listen(PORT, function () {
    consosle.log("Server is listening on http://notetaker13.herokuapp.com")
})

// // Set port

// const PORT = 7500;
// const server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//     // Capture URL the request is made to 
//     const path = req.url;
//     // When we visit different urls, read and respond with different files 
//     switch (path) {
//         case "/notes":
//             return fs.readFile(__dirname + "/notes.html", function (err, data) {
//                 if (err) throw err;
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 res.end(data);
//             });

//         // default to rendering index.html, if none of above cases are hit 
//         default:
//             return fs.readFile(__dirname + "/index.html", function (err, data) {
//                 if (err) throw err;
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 res.end(data);
//             });
//     }
// }

// // Start server

// server.listen(PORT, function () {
//     console.log("Server is listening on: http://localhost:" + PORT);
// })