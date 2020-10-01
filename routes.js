const fs = require('fs');
const path = require('path');

module.exports = app => {

    fs.readFile("db/db.json", "utf8", (err,data) => {

        if (err) throw err;

        var notes = JSON.parse(data);


        //API ROUTES

        app.get("/api/notes", (req, res){
            res.JSON(notes);
        });

        app.post("/app/notes", (req,res) {

            let newNote = req.body;
            notes.push(newNote);
            updateDb();
            return console.log("Added new note:" + newNote.title);
            
        });

        app.get("/api/notes/:id", (req,res) {
            res.JSON(notes[req.params.id]);
        });

        app.delete("/api/notes/:id", (req, res) {
            notes.splice(req.params.id, 1);
            updateDb();
            console.log("Deleted norte with id" + req.params.id);
        });



        //View Routes:


        app.get("/notes", (req,res) {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });

       
    })
}