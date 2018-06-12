var mysql = require('mysql');

var dbConfig = function () {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'myP@ssw0rd',
    database: 'portal_noticias_nodejs'
  });
}

module.exports = function () {
  return dbConfig;
};
