// https://openclassrooms.com/en/courses/2504541-ultra-fast-applications-using-node-js/2504972-creating-your-first-app-with-node-js
// Ejemplo básico de un servidor web creado con node.
// console.log() se ve en la terminal, NO EN EL BROWSER.

// http es un módulo de las librerías por default de node.
const http = require('http');

const PUERTO = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hola, mundo!');
});

console.log(`escuchando en el puerto ${PUERTO}`);
server.listen(PUERTO);
