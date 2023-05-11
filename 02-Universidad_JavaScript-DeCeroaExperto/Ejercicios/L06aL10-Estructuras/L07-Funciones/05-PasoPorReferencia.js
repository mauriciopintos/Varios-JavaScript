// Objeto
const persona = {
    nombre: 'Juan',
    apellido: 'Gimenez'
}

console.log(persona);
cambiarValorObjeto(persona);
console.log(persona);

// Paso por referencia
function cambiarValorObjeto(unaPersona) {
    // Cambia el valor de la propiedad del objeto del cual se hace referencia
    unaPersona.nombre = 'Cristina';
};