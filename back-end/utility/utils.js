/* FUNCION PRIVADA DE UTILIDAD */

const utility = {};
utility.objToArray = objeto => {
  let result = Object.keys(objeto).map(key => {
    return [key, objeto[key]];
  });
  return result;
};
const myPrivateKey = "klabeSekreta";
const jwt = require("jsonwebtoken");
/* Funcion estatica de creacion de tokens */
utility.createUserToken = ({ id, name, header, isAdmin }) => {

  const token = jwt.sign(
    {
      id,
      name,
      header,
      isAdmin
    },
    myPrivateKey
  );
  return token;
};

module.exports = utility;
