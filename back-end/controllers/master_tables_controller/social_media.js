connection = require("../../config/conexion");
bbdd = require("../../utility/mysql.js");
const {objToArray} = require("../../utility/utils");
const smController = {};

smController.showAll = (_, res) => {
  connection.query(bbdd.showAll("social_media"), (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

smController.showById = ({ params: { id } }, res) => {
  connection.query(bbdd.showById("social_media", id), (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

smController.insert = ({ body }, res) => {
  connection.query(bbdd.insert("social_media",objToArray(body)), (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

smController.updateById = ({ params: { id }, body }, res) => {
  connection.query(bbdd.update("social_media", objToArray(body), [["id", id]]), (e, result) => {
    if (e) throw e;
    res.send(result);
  });
};

smController.deleteById = ({ params: { id }, res }) => {
  connection.query(bbdd.delete("social_media", [["id", id]]), (e, result) => {
    if (e) throw e;
    res.send(result);
  });
};

module.exports = smController;
