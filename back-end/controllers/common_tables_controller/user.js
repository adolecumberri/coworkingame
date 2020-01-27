connection = require("../../config/conexion");
bbdd = require("../../utility/mysql.js");
const { objToArray } = require("../../utility/utils");
const controller = {};

controller.showAll = (_, res) => {
  console.log(bbdd.showAll("user"));
  connection.query(bbdd.showAll("user"), (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

controller.showById = ({ params: { id } }, res) => {
  connection.query(bbdd.showById("user", id), (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

controller.insert = ({ body }, res) => {
  body.last_visit = "CURDATE()";
  connection.query(bbdd.insert("user", objToArray(body)), (err, result) => {
    if (err) res.send(err);
    connection.query(bbdd.showById("user", result.insertId), (err, newUser) =>{
      if(err) throw err;
      res.send(newUser[0]);
    })

  });
};

controller.updateById = ({ params: { id }, body }, res) => {
  connection.query(
    bbdd.update("user", objToArray(body), [["id", id]]),
    (e, result) => {
      if (e) throw e;
      res.send(result);
    }
  );
};

controller.deleteById = ({ params: { id }, res }) => {
  connection.query(bbdd.delete("user", [["id", id]]), (e, result) => {
    if (e) throw e;
    res.send(result);
  });
};

module.exports = controller;
