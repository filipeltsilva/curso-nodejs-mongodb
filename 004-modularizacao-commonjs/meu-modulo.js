/*
  CommonJS utiliza da estrutura module.exports para exportar o recurso desejado,
  seja esse recurso uma variável, seja ele uma função, como no exemplo abaixo.
*/
module.exports = () => {
  const message = 'Mensagem do módulo indica que o servidor está ativado!';
  return message;
}
