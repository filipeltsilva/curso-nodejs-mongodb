module.exports = function() {
  this.getNoticias = function (connection, callback) {
    connection.query('SELECT * FROM noticias', callback);
  };

  this.getNoticia = function (connection, callback) {
    connection.query('SELECT * FROM noticias WHERE id = 2', callback);
  };

  this.salvarNoticia = function (noticia, connection, callback) {
    // Sintaxe de comando de inserção de dados no padrão JSON, suportada pelo MySQL
    connection.query('INSERT INTO noticias SET ?', noticia, callback);
  };

  return this;
}
