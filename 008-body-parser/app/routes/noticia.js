module.exports = function (app) {
  app.get('/noticia', function (request, response) {
    var connection = app.config.dbConnection();
    var noticiaModel = app.app.models.noticiasModel();

    noticiaModel.getNoticia(connection, function (error, result) {
      response.render('noticias/noticia', {noticia: result});
    });
  });
}
