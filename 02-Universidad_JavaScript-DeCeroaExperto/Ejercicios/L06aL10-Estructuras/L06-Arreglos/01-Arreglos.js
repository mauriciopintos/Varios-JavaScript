// Son un tipo de objeto

// Forma aticuada, ya no se recomienda declararlos de esta manera
let autos_OLD = new Array('BMW', 'Mercedes-Benz', 'Cadillac', 'VolskWagen');
console.log(autos_OLD);

// Forma actual y recomendada
const autos = ['BMW', 'Mercedes-Benz', 'Cadillac', 'VolskWagen'];
console.log(autos);

//Consultar tipo
console.log(typeof autos);
console.log(Array.isArray(autos));
console.log(autos instanceof Array);
