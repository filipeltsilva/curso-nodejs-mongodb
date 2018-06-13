module.exports = function (app) {
  app.get('/noticia', function (request, response) {
    var connection = app.config.dbConnection();
    var noticiaModel = new app.app.models.NoticiasDAO(connection);

    noticiaModel.getNoticia(function (error, result) {
      response.render('noticias/noticia', {noticia: result});
    });
  });
}
