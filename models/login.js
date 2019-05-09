const Sequelize = require("sequelize");
const sequelize = require("../config/config.json");

let Users = sequelize.define("users", {
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

Users.sync();

module.exports = Users;
