connection = require("../../config/conexion");
bbdd = require("../../utility/mysql.js");
const { objToArray, createUserToken } = require("../../utility/utils");
const controller = {};
/* NO */
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
    if (err) {
      res.sendStatus(400);
    } else {
      if (result == undefined) {
        res.sendStatus(400);
      } else {
        connection.query(
          bbdd.showById("user", result.insertId),
          (err, newUser) => {
            if (err) {
              res.sendStatus(400);
            } else {
              const token = createUserToken(newUser[0]);
              res.send({
                user: {
                  id: newUser[0].id,
                  name: newUser[0].name,
                  header: newUser[0].header,
                  isAdmin: newUser[0].isAdmin
                },
                token
              });
            }
          }
        );
      }
    }
  });
};

/*No*/
controller.updateById = ({ params: { id }, body }, res) => {
  connection.query(
    bbdd.update("user", objToArray(body), [["id", id]]),
    (e, result) => {
      if (e) throw e;
      res.send(result);
    }
  );
};

/*No*/
controller.deleteById = ({ params: { id }, res }) => {
  connection.query(bbdd.delete("user", [["id", id]]), (e, result) => {
    if (e) throw e;
    res.send(result);
  });
};

controller.login = ({ body }, res) => {
  
  connection.query(bbdd.select("user", "", [], objToArray(body)),
    (err, result) => {
      if (err) res.sendStatus(400);
      const token = createUserToken({
        id: result[0].id,
        name: result[0].name,
        header: result[0].header,
        isAdmin: result[0].isAdmin
      });
      
      console.log("el result: ");
      console.log(token);
      res.json(token); //POR QUEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!!!!!
    }
  );
};

module.exports = controller;
