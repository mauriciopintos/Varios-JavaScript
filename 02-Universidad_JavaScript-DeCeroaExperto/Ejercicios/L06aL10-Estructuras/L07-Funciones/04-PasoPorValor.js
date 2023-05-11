// Tipo primitivo: no tiene propiedades ni metodos
let x = 10;

// Paso por valor

cambiarValor(x);
console.log(x);

// No es posible consultar 'a' desde fuera de la funcion
console.log(a);

function cambiarValor(a) {
    // Solo cambia el valor de 'a', no el de la variable que pasò el valor
    a = 20
};