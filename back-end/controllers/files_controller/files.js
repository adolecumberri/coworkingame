const connection = require("../../config/conexion");
const bbdd = require("../../utility/mysql.js");

const controller = {};

controller.uploadUserAvatar = (req, res) => {
  console.log(req.body);
  console.log(req.files);
  
  res.sendStatus(200);
};
controller.uploadUserHeader = (req, res) => {
  console.log(req.body);
  console.log(req.file);
};

module.exports = controller;
