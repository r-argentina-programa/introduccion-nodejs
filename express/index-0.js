// esto lo instalamos a través de npm
const express = require('express');

const PUERTO = 8080;
const app = express();

// app.METODO('/ruta', (request, response) => { })
app.get('/', (req, res) => {
  res.end('Hola, mundo!');
});

// matchea /patricio, /mauricio, y otros nombres con los que alguna vez confundieron el mío
app.get(/\/[a-z]{3}ricio$/, (req, res, next) => { // notar el 3er parámetro `next`
  res.write('Hola');
  next('este es un parámetro que se le pasa a la siguiente función');
}, (a, req, res, next) => {
  console.log(a);
  res.write(', che!');
  next();
}, (req, res) => {
  res.end(' Chau.');
});

app.listen(8080);
console.log(`Escuchando en el puerto ${PUERTO}`);
