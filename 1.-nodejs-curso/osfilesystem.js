//Modulo del OS
const os = require('os');

//Metodos del OS
console.log(os.platform());
console.log(os.release());
console.log('Memoria Libre: ', os.freemem(), 'bytes');
console.log('Memoria Total: ', os.totalmem(), 'bytes');

//Modulo File System (Creando un texto)
const fs = require('fs');

fs.writeFile('./texto.txt', 'Linea Uno', function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo Creado');
});

//Modulo Read File (Leer un texto)
fs.readFile('./texto.txt', function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('Ultima Linea de Codigo');