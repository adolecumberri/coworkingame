
const mysql = require("mysql");

const connection = mysql.createConnection({
    port: '8080',
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'coworkin_coworkingame'
});


module.exports = connection;