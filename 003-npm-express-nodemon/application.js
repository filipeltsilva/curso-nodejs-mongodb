const express = require('express');
const application = express();

application.set('view engine', 'ejs');

// Para requisitar páginas criadas com View Engines como o EJS, usar o método render()
application.get('/', (request, response) => {
  response.render('home/index');
});

application.get('/formulario_insercao_noticia', (request, response) => {
  response.render('admin/form_add_noticia');
});

application.get('/noticias', (request, response) => {
  response.render('noticias/noticias');
});

application.listen(3000, () => {
  console.log('Servidor ativado');
});
