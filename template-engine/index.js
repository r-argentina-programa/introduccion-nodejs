// http://handlebarsjs.com/guide (el lenguaje de templating handlebars)
// https://github.com/ericf/express-handlebars (esta librería)

const fs = require('fs');
const express = require('express');
const multer = require('multer');

const upload = multer({ dest: './uploads/' });
const exphbs = require('express-handlebars');

const PUERTO = 8080;
const app = express();
const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(`${__dirname}/uploads`));

const nombre = 'Fabricio';

app.get('/', (req, res) => {
  res.render('home_ejemplo', {
    layout: 'ejemplo',
    data: {
      nombre,
      nombreMayusculas: () => nombre.toUpperCase(),
      listado: [1, 2, 3, 4],
      esPar: Math.ceil(Math.random() * 1000) % 2 === 0,
    },
  });
});


app.get('/form', (req, res) => {
  console.log(req.files);
  res.render('form', {
    layout: 'ejemplo',
  });
});

app.post('/form', upload.single('imagen'), (req, res) => {
  console.log(req.file);
  res.render('form', {
    layout: 'ejemplo',
    data: {
      mensaje: 'Éxito!',
      nombreArchivo: req.file.filename,
    },
  });
});

app.get('/jugadores', (req, res) => {
  const jugadores = fs.readFileSync('./data/jugadores.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(jugadores);
});

app.listen(PUERTO);
console.log(`Escuchando en puerto ${PUERTO}`);
