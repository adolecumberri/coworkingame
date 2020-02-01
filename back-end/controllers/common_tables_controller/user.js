connection = require("../../config/conexion");
bbdd = require("../../utility/mysql.js");
const {
  objToArray,
  createUserToken,
  convertDate
} = require("../../utility/utils");
const controller = {};
/* NO */
controller.showAll = (_, res) => {
  console.log(bbdd.showAll("user"));
  connection.query(bbdd.showAll("user"), (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

controller.showById = ({
  params: {
    id
  }
}, res) => {
  connection.query(bbdd.showById("user", id), (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

controller.insert = ({
  body
}, res) => {
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

controller.updateById = ({
  params: {
    id
  },
  body
}, res) => {
  console.log(bbdd.update("user", objToArray(body), [
      ["id", id]
    ])),
    connection.query(
      bbdd.update("user", objToArray(body), [
        ["id", id]
      ]),
      (e, result) => {
        if (e) res.sendStatus(401);
        console.log(result);
        res.send(result);
      }
    );
};

/*No*/
controller.deleteById = ({
  params: {
    id
  },
  res
}) => {
  connection.query(bbdd.delete("user", [
    ["id", id]
  ]), (e, result) => {
    if (e) throw e;
    res.send(result);
  });
};

controller.login = ({
  body
}, res) => {
  console.log(bbdd.select("user", "", [], objToArray(body)));
  connection.query(
    bbdd.select("user", "", [], objToArray(body)),
    (err, result) => {
      if (err) res.sendStatus(400);
      console.log(result);
      const token = createUserToken({
        id: result[0].id,
        name: result[0].name,
        header: result[0].header,
        avatar: result[0].avatar,
        isAdmin: result[0].isAdmin
      });
      res.json(token); //POR QUEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!!!!!
    }
  );
};

controller.getLessData = (req, res) => {
  connection.query(
    bbdd.select("user", ["id", "name", "email", "active", "isAdmin"]),
    (err, result) => {
      if (err) res.sendStatus(400);

      res.send(result); //POR QUEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!!!!!
    }
  );
};

controller.getDevInfo = (req, res) => {

  connection.query(
    bbdd.select(
      "user",
      ["name", "gender", "age", "country", "state"],
      [],
      [
        ["id", "" + req.body.id]
      ]
    ),
    (err, result) => {
      if (err) res.sendStatus(400);

      let devInfo = {
        ...result[0]
      };
      let newAge = convertDate(result[0].age);
      devInfo.age = {
        day: newAge.substring(8, 10),
        month: newAge.substring(5, 7),
        year: newAge.substring(0, 4)
      };
      res.send(devInfo);
    }
  );
};

controller.checkPassword = (req, res) => {
  const {
    old_pssw,
    id_user
  } = req.body;
  connection.query(bbdd.select("user", ["name"], [], [
      ["password", `sha1('${old_pssw}')`],
      ["id", id_user]
    ]),
    (err, result) => {
      if (result.length == 0) {
        res.send({
          name: false
        });
      } else {
        res.send(result[0]);
      }
    });
};

controller.confirmUser = (req, res) => {};

module.exports = controller;