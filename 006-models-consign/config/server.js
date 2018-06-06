const express = require('express');
const consign = require('consign');
const application = express();

application.set('view engine', 'ejs');
application.set('views', './app/views');

// A inclusão de arquivos pelo Consign deve ser feita após a execução da aplicação
consign().include('./app/routes').into(application);

module.exports = application;
