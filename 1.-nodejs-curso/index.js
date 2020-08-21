/*
const http = require('http');
const colors = require('colors');

const handleServer = function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Hola Mundo desde NodeJs y mi Laptop</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on Port 3000'.green);
});
*/

//Creando un Servidor Usando Express
const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function(req, res){
    res.send('<h1>Hola Mundo con Express y Nodejs</h1>');
    res.end();
})

server.listen(3000, function(){
    console.log('Server on Port 3000'.red);
});
