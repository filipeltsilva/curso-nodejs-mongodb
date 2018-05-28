const app = require('./config/server');
const myModule = require('./meu-modulo')();
const indexRouter = require('./app/routes/index')(app);
const newsRouter = require('./app/routes/noticias')(app);
const newsInsertRouter = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, () => {
  console.log(myModule);
});
