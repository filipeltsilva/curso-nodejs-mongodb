const app = require('./config/server');
const myModule = require('./meu-modulo')();

app.listen(3000, () => {
  console.log(myModule);
});
