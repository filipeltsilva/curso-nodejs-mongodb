const http = require('http');

http.createServer((request, response) => {
  const category = request.url;

  switch (category) {
    case '/tecnologia':
      response.end('<html><body>Notícias de Tecnologia</body></html>');
      break;
    case '/economia':
      response.end('<html><body>Notícias de Economia</body></html>');
      break;
    default:
      response.end('<html><body>Página Inicial do Portal de Notícias</body></html>');
      break;
  }
}).listen(3000);
