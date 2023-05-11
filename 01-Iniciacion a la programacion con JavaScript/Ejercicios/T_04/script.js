// 1. Crea una variable con tu nombre
var nombre = 'Mauricio';
console.log(nombre);
// 2. Otra con tu apellido
var apellido = 'Pintos';
console.log(apellido);

// 3. Una de nombre completo, donde se unan las variables anteriores con un espacio entre medio.
var nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto);

// 4. Cambiar a mayusculas la variable nombre completo.
var nombreMayusculas = nombreCompleto.toUpperCase();
console.log(nombreMayusculas);

// 5. Cambiar a minusculas la variable anterior.
var nombreMinusculas = nombreCompleto.toLowerCase();
console.log(nombreMinusculas);

// 6. Obtener la ultima letra del nombre.
var ultimaLetraDeNombre = nombre[nombre.length-1];
console.log(ultimaLetraDeNombre);

// 7. Obtener la primera letra del apellido.
var primerLetraDeNombre = nombre[0];
console.log(primerLetraDeNombre);

// 8. Crear una frase con espacios al principio y final, guardarla en una variable y quitarle los espacios.
var frase = '     Esta frase tiene espacios ';
console.log(frase);
//console.log(frase[1,frase.length-1]); Esta opcion esta mal
console.log(frase.trim());

// 9. Indicar si una palabra concreta esta dentro de la frase anterior y devolver su posicion.
var palabra = frase.indexOf("tiene");
console.log(palabra);
