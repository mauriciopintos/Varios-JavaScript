// AND &&
let a = 15;
let valMin = 0, valMax = 10;
if(a >= valMin && a <= valMax) {
    console.log('Dentro del rango');
} else {
    console.log('Fuera del rango');
}

// OR ||
let vacaciones = false, diaDescanso = true;
if(vacaciones || diaDescanso) {
    console.log('Puede asistir al juego del hijo');
} else {
    console.log('El padre esta ocupado');
}

// Ternario
let resultado = (3>2) ? 'verdadero' : 'falso';
console.log(resultado);

let numero = 21;
resultado = (numero % 2 == 0) ? 'Numero par' : 'Numero impar';
console.log(resultado);
