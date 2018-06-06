const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'myP@ssw0rd',
    database: 'portal_noticias_nodejs',
    port: 3306
  });
}
