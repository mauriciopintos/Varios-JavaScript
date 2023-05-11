// Declaracion implicita de un objeto
let persona = {
    // Propiedades
    nombre: 'Juan',
    apellido: 'Gimenez',
    email: 'juan.gimenez@correo.com',
    edad: 26,
    // Metodos
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`
    }
}

console.log(persona.nombre);
console.log(persona.nombreCompleto());
console.log(persona.edad);
console.log(persona.email);
console.log(persona);


// Declaracion explicita de un objeto
let persona2 = new Object();
persona2.nombre = 'Mariana';
persona2.apellido = 'Sandoval';
persona2.edad = 35;
persona2.email = 'msandoval@unmail.com';

console.log(persona2.nombre);
console.log(persona2.edad);
console.log(persona2.email);
console.log(persona2);

// Distintas formas de crear objetos
let objetoNew = new Object();
objetoNew.fecha = '20-11-2022';
let objetoJSON = {fecha:'20-11-2022'};

let cadenaNew = new String('Una cadena');
let cadenaDirecta = 'Una cadena';

let numeroNew = new Number(1);
let numeroDirecto = 1;

let booleanoNew = new Boolean(true);
let booleanoDirecto = false;

let arregloNew = new Array();
let arregloDirecto = [];

let funcionNew = new Function();
let funcionDirecta = function(){};