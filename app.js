// pode ser srv no lugar de app, pois este é o nome que utilizarei aqui em app.js
var app = require('./config/server');

app.listen(8000, function(){
  console.log("");
  console.log("Servidor NodeJs ------------> Rodando em : localhost:8000");
});
