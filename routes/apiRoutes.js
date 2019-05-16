let db = require("../models");

module.exports = function(app) {
  app.get("/api/:characters?", function(req, res) {
    if (req.params.characters) {
      Character.findOne({
        where: {
          routeName: req.params.characters
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      Character.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  app.post("/api/new", function(req, res) {

    let character = req.body;
    let routeName = character.name.replace(/\s+/g, "").toLowerCase();
    //console.log(character);
    db.Characters.create({
      routeName: routeName,
      name: character.name,
      class: character.class,
      race: character.race,
      alignment: character.alignment,
      level: character.level,
      experience: character.experience,
      speed: character.speed,
      charisma: character.charisma,
      strength: character.strength,
      dexterity: character.dexterity,
      constitution: character.constitution,
      intelligence: character.intelligence
    });

    res.status(204).end();
  });

  app.delete("/api/delete/:id", function(req, res) {
    db.Character.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCharacter) {
      res.json(dbCharacter);
    });
  });
};