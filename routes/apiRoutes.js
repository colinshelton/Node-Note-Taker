const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// ROUTING ================

module.exports = function (app) {
  // API GET REQUESTS

  app.get("/api/notes", function (req, res) {
    fs.readFile(__dirname + "/../db/db.json", "utf8", function (err, data) {
      if (err) throw err;
      console.log("data", data);
      res.json(JSON.parse(data));
    });
  });

  // API POST REQUESTS

  app.post("/api/notes", function (req, res) {
    const notes = JSON.parse(
      fs.readFileSync(__dirname + "/../db/db.json", "utf8")
    );

    const { title, text } = req.body;
    const newNote = { title, text, id: uuidv4() };
    notes.push(newNote);
    console.log("newNote", newNote);
    console.log("body", req.body);
    console.log("notes", notes);
    // read file
    // inside read file, parse -array, push new req.body into array
    // write file
    fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(notes), (err) => {
      if (err) throw err;
      console.log("the file has been saved");
    });
    res.json(notes);
  });

  app.delete("/api/notes/:id", function (req, res) {
    const notes = JSON.parse(
      fs.readFileSync(__dirname + "/../db/db.json", "utf8")
    );
    const updatedNotes = notes.filter(
      (updateNotes) => updateNotes.id !== req.params.id
    );
    console.log(updatedNotes);
    // array method
    fs.writeFile(
      __dirname + "/../db/db.json",
      JSON.stringify(updatedNotes),
      (err) => {
        if (err) throw err;
        console.log("the file has been saved");
      }
    );
    res.json(updatedNotes);
  });
};
