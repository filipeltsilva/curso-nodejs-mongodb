var express = require('express');
var consign = require('consign');
var application = express();

application.set('view engine', 'ejs');
application.set('views', './app/views');

/*
  A inclusão de arquivos pelo Consign deve ser feita após a execução da aplicação.
  Para incluir um arquivo específico de um diretório, é obrigatório informar sua extensão.
  Quando se omite a extensão do arquivo, o Consign subentende que um diretório foi incluído.
*/
consign()
  .include('./app/routes')
  .then('./config/dbConnection.js')
  .then('./app/models')
  .into(application);

module.exports = application;
