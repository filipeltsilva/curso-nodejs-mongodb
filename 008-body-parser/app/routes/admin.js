module.exports = function (app) {
  app.get('/formulario_inclusao_noticia', function (request, response) {
    response.render('admin/form_add_noticia');
  });

  app.post('/noticias/salvar', function (request, response) {
    var noticia = request.body;
    var connection = app.config.dbConnection();
    var noticiasModel = app.app.models.noticiasModel();

    noticiasModel.salvarNoticia(noticia, connection, function (error, result) {
      response.redirect('/noticias');
    });
  });
}
