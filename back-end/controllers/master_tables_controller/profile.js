const connection = require("../../config/conexion");
const bbdd = require("../../utility/mysql.js");
const {objToArray} = require("../../utility/utils");
const controller = {};

controller.showAll = (_, res) => {
  connection.query(bbdd.showAll("profile"), (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

controller.showById = ({ params: { id } }, res) => {
  connection.query(bbdd.showById("profile", id), (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

controller.insert = ({ body }, res) => {
  connection.query(bbdd.insert("profile",objToArray(body)), (err, result) => {
    if (err) res.sendStatus(400);
    res.send(result);
  });
};

controller.updateById = ({ params: { id }, body }, res) => {
  connection.query(bbdd.update("profile", objToArray(body), [["id", id]]), (e, result) => {
    if (e) throw e;
    res.send(result);
  });
};

controller.deleteById = ({ params: { id }, res }) => {
  connection.query(bbdd.delete("profile", [["id", id]]), (e, result) => {
    if (e) throw e;
    res.send(result);
  });
};

module.exports = controller;
