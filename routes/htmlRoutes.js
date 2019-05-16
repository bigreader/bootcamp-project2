const path = require("path");

module.exports = function(app, db) {
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

  app.get("/characters", function(req, res) {
    db.Characters.findAll().then(results => {

      res.render("character-list", {
        characters: results
      });

    })
    
  });

  app.get("/characters/:id", function(req, res) {
    const id = req.params.id;
    db.Characters.findOne({
      where: {
        id: id
      }
    }).then(result => {
      console.log(result);
      res.render("character", {
        ...result.dataValues
      });      
    });

  });

  app.get("/add", function(req, res) {
    res.render("character-add");  
  });

};