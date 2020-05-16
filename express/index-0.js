const express = require('express');

const PUERTO = 8080;
const app = express();

app.get('/', (req, res) => {
  res.end('Hola, mundo!');
});

app.listen(8080);
console.log(`Escuchando en el puerto ${PUERTO}`);
