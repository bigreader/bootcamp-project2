module.exports = function(sequelize, DataTypes) {

var Characters = sequelize.define("Characters", {
  routeName: DataTypes.STRING,
  name: DataTypes.STRING,
  image: {
    type: DataTypes.STRING,
    defaultValue: "/img/avatar.png"
  }
  class: DataTypes.STRING,
  race: DataTypes.STRING,
  alignment: DataTypes.STRING,
  level: DataTypes.INTEGER,
  experience: DataTypes.INTEGER,
  speed: DataTypes.INTEGER,
  strength: DataTypes.INTEGER,
  dexterity: DataTypes.INTEGER,
  constitution: DataTypes.INTEGER,
  intelligence: DataTypes.INTEGER,
  wisdom: DataTypes.INTEGER,
  charisma: DataTypes.INTEGER
  });

  Characters.sync({force:true});

  return Characters;
};
