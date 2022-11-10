import express from 'express'
import path from 'path';
import {fileURLToPath} from 'url';
import hbs from 'hbs';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));  

app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'Albert Vazquez',
    titulo: 'Mi titulo'
  });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
      nombre: 'Albert Vazquez',
      titulo: 'Mi titulo'
    });
  });

app.get('/elements', (req, res) => {
    res.render('elements',{
      nombre: 'Albert Vazquez',
      titulo: 'Mi titulo'
    });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});