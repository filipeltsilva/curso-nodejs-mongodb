module.exports = (app) => {
  app.get('/formulario_inclusao_noticia', (request, response) => {
    response.render('admin/form_add_noticia');
  });
}
