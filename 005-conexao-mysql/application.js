const app = require('./config/server');
const indexRouter = require('./app/routes/index')(app);
const newsRouter = require('./app/routes/noticias')(app);
const newsInsertRouter = require('./app/routes/formulario_inclusao_noticia')(app);
const myModule = require('./meu-modulo')();

app.listen(3000, () => {
  console.log(myModule);
});
