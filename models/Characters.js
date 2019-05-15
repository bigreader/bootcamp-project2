module.exports = function(sequelize, DataTypes) {

var Characters = sequelize.define("Characters", {
  routeName: DataTypes.STRING,
  name: DataTypes.STRING,
  charisma: DataTypes.INTEGER,
  strength: DataTypes.INTEGER,
  dexterity: DataTypes.INTEGER,
  constitution: DataTypes.INTEGER,
  intelligence: DataTypes.INTEGER,
  });

  Characters.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
   // Characters.hasMany(models.Post, {
     // onDelete: "cascade"
    //});
  };

  return Characters;
};
