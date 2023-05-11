// if/else
let condicion = true;

if( condicion){
    console.log('Condicion verdadera');
} else {
    console.log('Condicion falsa');
}

// if/else if/else
let numero = 10;

if(numero == 0){
    console.log('Es elemento neutro');
} else if(numero > 0) {
    console.log('Es numero positivo');
} else {
    console.log('Es numero negativo');
}

// multi if
// Ejemplo estaciones
let mes = 1;
let estacion;

if(mes <= 0 || mes > 12 ){
    estacion = 'No existe el mes '+mes;
}else if(mes == 12 || mes <= 2){
    estacion = 'Es verano';
} else if(mes <= 5){
    estacion = 'Es otoño';
} else if(mes <= 8){
    estacion = 'Es invierno';
} else {
    estacion = 'Es primavera';
}

console.log(estacion)


// Ejemplo horas

let hora = 4;
let saludo;

if(hora < 0 || hora > 24){saludo = 'Horario no existe';} 
else if(hora <= 6){saludo='Durmiendo';}
else if(hora <= 11){saludo='Buenos dias';}
else if(hora <= 18){saludo='Buenas tardes';}
else{saludo='Buenas noches'}
console.log(saludo);

//Condicional Switch
// Ejemplo estaciones
mes = 111;

switch(mes){
    case 1: case 2: case 12:
        estacion = 'Es verano';
        break;
    case 3: case 4: case 5:
        estacion = 'Es otoño';
        break;
    case 6: case 7: case 8:
        estacion = 'Es invierno';
        break;
    case 9: case 10: case 11:
        estacion = 'Es primavera';
        break;
    default:
        estacion = 'No existe el mes '+mes;
        break;
}

console.log(estacion)