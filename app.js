// DEPENDENCIES

const express = require("express");

// EXPRESS CONFIGURATION

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//ROUTER
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "public/assets/index.html"));
// });

// app.use(function (req, res) {
//   res.setHeader("Content-Type", "text/plain");
//   res.write("you posted:\n");
//   res.end(JSON.stringify(req.body, null, 2));
// });

// LISTENER

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
