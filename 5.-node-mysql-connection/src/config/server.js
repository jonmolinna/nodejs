const express = require('express');
const path = require('path'); //Rutas del Sistema operativo
const bodyParser = require('body-parser');   //Es un middleware

const app = express();

//Settinngs
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

//Middleware
app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;

