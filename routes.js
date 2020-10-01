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

       
    })
}