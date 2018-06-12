module.exports = function() {
  this.getNoticias = function (connection, callback) {
    connection.query('SELECT * FROM noticias', callback);
  };

  this.getNoticia = function (connection, callback) {
    connection.query('SELECT * FROM noticias WHERE id = 2', callback);
  };

  return this;
}
