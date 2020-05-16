// https://openclassrooms.com/en/courses/2504541-ultra-fast-applications-using-node-js/2504972-creating-your-first-app-with-node-js
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const pagina = url.parse(req.url).pathname;
  // este console.log se muestra en la terminal
  console.log(pagina);

  let respuesta = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset='utf-8'> <!-- si comentamos esto, qué pasa? Probar con /sotano en el navegador -->
    <title>Introducción a Node.js</title>
    </head>
    <body>
  `;

  // si no ponemos esto, ver la diferencia en postman
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  switch (pagina) {
    case '/':
      respuesta += 'Bienvenidos a mi casa!';
      break;
    case '/sotano':
      respuesta += 'Bienvenido al sótano!';
      break;
    case '/patio':
      respuesta += 'Bienvenido al patio!';
      break;
    case '/habitacion':
      respuesta += 'Qué habitación? Principal o de húesped?';
      break;
    case '/habitacion/principal':
      respuesta += 'Bienvenido a la habitación princpal';
      break;
    case '/habitacion/huesped':
      respuesta += 'Bienvenido a la habitación para huéspedes';
      break;
    default:
      res.statusCode = 500;
      respuesta += 'epa';
  }

  respuesta += '</body></html>';
  res.end(respuesta);
});
server.listen(8080);
