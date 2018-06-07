var express = require('express');
var consign = require('consign');
var application = express();

application.set('view engine', 'ejs');
application.set('views', './app/views');

/*
  A inclusão de arquivos pelo Consign deve ser feita após a execução da aplicação.
  Para incluir um arquivo específico de um diretório, é obrigatório informar sua extensão.
*/
consign()
  .include('app/routes')
  .then('config/db-connection.js')
  .into(application);

module.exports = application;
