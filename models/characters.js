const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

let Characters = sequelize.define("character", {
  routeName: Sequelize.STRING,
  name: Sequelize.STRING,
  class: Sequelize.STRING,
  race: Sequelize.STRING,
  alignment: Sequelize.STRING,
  level: Sequelize.INTEGER,
  experiene: Sequelize.INTEGER,
  speed: Sequelize.INTEGER,
  charisma: Sequelize.INTEGER,
  strength: Sequelize.INTEGER,
  dexterity: Sequelize.INTEGER,
  constitution: Sequelize.INTEGER,
  intelligence: Sequelize.INTEGER
});

Characters.sync();

module.exports = Characters;
