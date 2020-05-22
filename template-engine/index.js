// http://handlebarsjs.com/guide (el lenguaje de templating handlebars)
// https://github.com/ericf/express-handlebars (esta librería)
// https://expressjs.com/en/guide/using-template-engines.html (cómo express usa template engines)
// multer es para subir archivos de un form que tiene type enctype multipart/form-data


// nodejs core, fs = filesystem
const fs = require('fs');
const express = require('express');
const multer = require('multer');

const upload = multer({ dest: './uploads/imagenes' });
const exphbs = require('express-handlebars');

const PUERTO = 8080;
const app = express();
const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// esto define que el directorio /uploads contiene assets estáticos,
// que se deben servir tal cual están
// notar que no hace falta ir a localhost:8080/uploads
// https://expressjs.com/en/starter/static-files.html
app.use(express.static(`${__dirname}/uploads`));

const nombre = 'Fabricio';

app.get('/', (req, res) => {
  res.render('home_ejemplo', {
    layout: 'ejemplo',
    data: {
      nombre,
      // notar que esta función se ejecuta al renderear la vista, 
      // en el servidor, no en el navegador.
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

app.get('/equipos', (req, res) => {
  const equipos = fs.readFileSync('./data/equipos.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(equipos);
});

app.listen(PUERTO);
console.log(`Escuchando en http://localhost:${PUERTO}`);
