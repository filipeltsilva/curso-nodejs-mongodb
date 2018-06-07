var app = require('./config/server');
var myModule = require('./meu-modulo')();

app.listen(3000, function () {
  console.log(myModule);
});
