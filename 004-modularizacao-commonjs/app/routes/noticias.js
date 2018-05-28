module.exports = (app) => {
  app.get('/noticias', (request, response) => {
    response.render('noticias/noticias');
  });
}
