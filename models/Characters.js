var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Characters = sequelize.define("Characters", {
  routeName: Sequelize.STRING,
  name: Sequelize.STRING,
  charisma: Sequelize.INTEGER,
  strength: Sequelize.INTEGER,
  dexterity: Sequelize.INTEGER,
  constitution: Sequelize.INTEGER,
  intelligence: Sequelize.INTEGER,
  });

 
// Syncs with DB
Characters.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Characters;

