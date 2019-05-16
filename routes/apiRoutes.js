let db = require("../models");

module.exports = function(app, db) {
  app.get("/api/:characters?", function(req, res) {
    if (req.params.characters) {
      db.Characters.findOne({
        where: {
          routeName: req.params.characters
        }
      }).then(function(result) {
        if (!result) return res.status(404).end();
        return res.json(result);
      });
    } else {
      db.Characters.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  app.post("/api/new", function(req, res) {

    let character = req.body;
    let routeName = character.name.replace(/\s+/g, "").toLowerCase();

    db.Characters.create({
      routeName: routeName,
      name: character.name,
      image: character.image,
      class: character.class,
      race: character.race,
      alignment: character.alignment,
      level: character.level,
      experience: character.experience,
      speed: character.speed,
      strength: character.strength,
      dexterity: character.dexterity,
      constitution: character.constitution,
      wisdom: character.wisdom,
      intelligence: character.intelligence,
      charisma: character.charisma
    }).then(function(character) {
      res.status(201).json(character);
    });

  });


  app.put("/api/:id", function(req, res) {
    db.Characters
    .update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function(count) {
      res.status(204).end();
    })
    .catch(function(err) {
      res.status(500).end();
    });
  });
 

  app.delete("/api/delete/:id", function(req, res) {
    db.Characters.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCharacter) {
      res.json(dbCharacter);
    });
  });
};
