const express = require('express');

const PUERTO = 8080;
const app = express();

// ejemplo de middleware que hace logging
app.use((req, res, next) => {
  console.log(`[${new Date()}] - Llamada a ${req.method} ${req.url}`);
  next();
});

// El orden de los middleware importa. El primero que "matchea" es el que vale.

// middleware para requests con content-type: application/json
app.use(express.json());

// middleware para parsear cualquier request como texto.
// Si pongo este middleware primero, entonces nunca va a usar el de json (porque este atrapa todos)
app.use(express.text({ type: '*/*' }));

app.get('/', (req, res) => {
  res.end('Hola, mundo!');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.end(req.body);
});

app.all('/todo', (req, res) => {
  res.send(`Hola! Me llamaste con un ${req.method}`);
});

app.put('/prueba-middleware', (req, res) => {
  res.send(`El body es ${JSON.stringify(req.body)}`);
});

app.delete('/borrar', (req, res) => {
  res.send(`El body es ${JSON.stringify(req.body)}`);
});

app.listen(PUERTO);
console.log(`Escuchando en el puerto ${PUERTO}`);
