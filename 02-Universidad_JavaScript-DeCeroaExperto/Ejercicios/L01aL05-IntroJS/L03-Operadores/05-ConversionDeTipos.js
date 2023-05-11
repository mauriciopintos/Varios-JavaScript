// Casteo
let miNumero = '10';
console.log(miNumero);
console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(edad);
console.log(typeof edad);

if(edad >= 18) {
    console.log('Muy joven para votar');
} else {
    console.log('Puede votar');
}

let voto = (edad >= 18) ? 'Muy joven para votar' : 'Puede votar';

console.log(voto);

// Es un numero?
miNumero = '17y';
edad = Number(miNumero);
console.log(edad); //Not a Number
console.log(typeof edad);

function valida(unaEdad) {return (unaEdad <= 18) ? 'Muy joven para votar' : 'Puede votar'};

edad = '10';
let esNumero = (isNaN(edad)) ? 'No es un numero' : valida(edad);
console.log(esNumero);