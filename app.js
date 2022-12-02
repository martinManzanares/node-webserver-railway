const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars.
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// MIDDLEWARE.
app.use( express.static('public'));

app.get('/', (req,res) => {
    res.render('home', {
        nombre: 'Martin Rivera',
        titulo: 'Curso NODE'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Martin Rivera',
        titulo: 'Curso NODE'
    });
});

app.get('/elements', (req,res) => {
    res.render('elements', {
        nombre: 'Martin Rivera',
        titulo: 'Curso NODE'
    });
});

app.listen(port, () => {
    console.log('Server is running on port', port);
})