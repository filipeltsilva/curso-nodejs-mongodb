module.exports = function (app) {
  app.get('/noticias', function (request, response) {
    var connection = app.config.dbConnection();

    connection.query('SELECT * FROM noticias', function (error, result) {
      response.render('noticias/noticias', {noticias: result});
    });
  });
}