const path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/welcome.html"));
  });

  app.get("/demo", function(req, res) {
    res.render("char", {
      name: "Arthin Westbrook",
      strength: 15,
      dexterity: 13,
      constitution: 13,
      intelligence: 7,
      wisdom: 15,
      charisma: 19
    });
  });

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/all.html"));
  });
};