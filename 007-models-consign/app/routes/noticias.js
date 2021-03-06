module.exports = function (app) {
  app.get('/noticias', function (request, response) {
    var connection = app.config.dbConnection();
    var noticiasModel = app.app.models.noticiasModel();

    noticiasModel.getNoticias(connection, function (error, result) {
      response.render('noticias/noticias', {noticias: result});
    });
  });
}
