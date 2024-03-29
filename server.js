var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/api/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  
  // Displays all characters
  app.get("/api/waitlist", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  



  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  