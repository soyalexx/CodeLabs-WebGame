var express = require('express');
var fs = require('fs');
var path = require('path');
var handlebars = require("express-handlebars");
const { config } = require('process');

const app = express();

const handlebars = require('express-handlebars').create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + "/public"));

app.get('/', (request, response) => {
    response.render('index.handlebars');
});

app.get('/home', (request, response) => {
    response.render('home.handlebars');
});

app.get('/host', (request, response) => {
    response.render('host.handlebars');
});

app.get('/join', (request, response) => {
    response.render('join.handlebars');
});

app.get('/game', (request, response) => {
    response.render('game.handlebars');
});

app.get('/game-over', (request, response) => {
    response.render('game-over.handlebars');
});

app.get('/aboutus', (request, response) => {
    response.render('aboutus.handlebars');
});

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});
