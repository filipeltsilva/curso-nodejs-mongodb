const dbConnection = require('../../config/db-connection');

module.exports = (app) => {
  const connection = dbConnection();

  app.get('/noticias', (request, response) => {

    // A consulta retorna um JSON de acordo com o comando SQL passado pelo parâmetro
    connection.query('SELECT * FROM noticias', (error, result) => {
      console.log(result);
      console.log(error);
      response.render('noticias/noticias', {noticias: result});
    });
  });
};
