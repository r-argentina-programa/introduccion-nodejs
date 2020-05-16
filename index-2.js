// https://openclassrooms.com/en/courses/2504541-ultra-fast-applications-using-node-js/2504972-creating-your-first-app-with-node-js
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const pagina = url.parse(req.url).pathname;

  // este console.log se muestra en la terminal
  console.log(pagina);

  // siempre debe pasar antes que el write de la respuesta
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.write(`
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset='utf-8'> <!-- si comentamos esto, qué pasa? Probar con /sotano en el navegador -->
    <title>Introducción a Node.js</title>
    </head>
    <body>
  `);

  switch (pagina) {
    case '/':
      res.write('Bienvenidos a mi casa!');
      break;
    case '/sotano':
      res.write('Bienvenido al sótano!');
      break;
    case '/patio':
      res.write('Bienvenido al patio!');
      break;
    case '/habitacion':
      res.write('Qué habitación? Principal o de húesped?');
      break;
    case '/habitacion/principal':
      res.write('Bienvenido a la habitación princpal');
      break;
    case '/habitacion/huesped':
      res.write('Bienvenido a la habitación para huéspedes');
      break;
    default:
      res.write('epa');
  }
  res.end('</body></html>');
});
server.listen(8080);
