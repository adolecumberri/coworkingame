connection = require("../../config/conexion");
bbdd = require("../../utility/mysql.js");
const {objToArray} = require("../../utility/utils");
const countryController = {};

countryController.showAll = (_, res) => {
  console.log(bbdd.showAll("country"));
  connection.query(bbdd.showAll("country"), (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

countryController.showById = ({ params: { id } }, res) => {
  connection.query(bbdd.showById("country", id), (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

countryController.insert = ({ body }, res) => {
  connection.query(bbdd.insert("country",objToArray(body)), (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

countryController.updateById = ({ params: { id }, body }, res) => {
  connection.query(bbdd.update("country", objToArray(body), [["id", id]]), (e, result) => {
    if (e) throw e;
    res.send(result);
  });
};

countryController.deleteById = ({ params: { id }, res }) => {
  connection.query(bbdd.delete("country", [["id", id]]), (e, result) => {
    if (e) throw e;
    res.send(result);
  });
};

module.exports = countryController;
