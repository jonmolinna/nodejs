//Declarando un Objeto
const Math = {};

//Creando Funciones
function add(x1, x2){
    return x1+x2;
}

function substract(x1, x2){
    return x1-x2;
}

function multiply(x1, x2){
    return x1*x2;
}

function divide(x1, x2){
    if(x2==0){
        console.log('No se puede dividir entre cero');
    } else {
        return x1/x2;
    }
}
//Para Exportar Funciones
/*
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
*/

//Exportar Objeto
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;

//Exportar una funcion
/*
function hello(name){
    console.log('Hola ', name);
}

module.exports = hello;
*/
