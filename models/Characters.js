module.exports = function(sequelize, DataTypes) {

var Characters = sequelize.define("Characters", {
  routeName: DataTypes.STRING,
  name: DataTypes.STRING,
  class: DataTypes.STRING,
  race: DataTypes.STRING,
  alignment: DataTypes.STRING,
  level: DataTypes.INTEGER,
  experience: DataTypes.INTEGER,
  speed: DataTypes.INTEGER,
  charisma: DataTypes.INTEGER,
  strength: DataTypes.INTEGER,
  dexterity: DataTypes.INTEGER,
  constitution: DataTypes.INTEGER,
  intelligence: DataTypes.INTEGER
  });

  return Characters;
};
