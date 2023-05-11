'use strict';
try{
    let z = 99;
    throw 'Error de prueba';
} catch(error) {
    console.log(error);
} finally {
      console.log('Finaliza la revision de errores');
}

console.log('Continua el codigo');


let resultado = 5;

try{
    if(isNaN(resultado)) {
        throw 'No es un numero';
    } else if( resultado === '') {
        throw 'Es cadena vacia'
    } else if(typeof resultado == 'Number'){
        console.log(`El resultado es: ${resultado}`)
    }
}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}

// Catch tiene prioridad respecto de Throw
try{
    x = 5;
    if(isNaN(resultado)) {
        throw 'No es un numero';
    } else if( resultado === '') {
        throw 'Es cadena vacia'
    } else if(typeof resultado == Number){
        console.log(`El resultado es: ${resultado}`)
    }
}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}