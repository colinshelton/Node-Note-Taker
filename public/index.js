// Requiure dependencies

const path = require('path')
const PORT = process.env.PORT || 5000

// Set Port 
const PORT = process.env.PORT || 3001

app.get("/", function (req, res) {
    res.json(path.join(__dirname, "/index.html"));
});

// Start App 
app.listen(PORT, function () {
    consosle.log("Server is listening on http://notetaker13.herokuapp.com")
});