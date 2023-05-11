funcionUno();
funcionDos();
function funcionUno(){
    console.log('Funcion Uno');
}

function funcionDos(){
    console.log('Funcion Dos');
}

// Funcion Callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let resultado = `Resultado: ${op1 + op2}`;
    funcionCallback(resultado);
}

sumar(5, 3, imprimir);