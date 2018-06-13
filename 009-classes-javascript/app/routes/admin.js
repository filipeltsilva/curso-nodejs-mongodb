module.exports = function (app) {
  app.get('/formulario_inclusao_noticia', function (request, response) {
    response.render('admin/form_add_noticia');
  });

  app.post('/noticias/salvar', function (request, response) {
    var noticia = request.body;
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (error, result) {
      response.redirect('/noticias');
    });
  });
}
