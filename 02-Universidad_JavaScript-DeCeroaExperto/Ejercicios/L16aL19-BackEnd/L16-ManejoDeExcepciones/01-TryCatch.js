'use strict';
try{
    // Generamos un error dentro del bloque Try
    z = 99; // Aqui se produce el error
    miFuncio(); // Esta linea y las siguientes del bloque ya no se ejecutan
} catch(error) {
    // Capturamos el error y lo mostramos en el bloque catch
    console.log(error);
} finally {
    /* finaly es optativo, nos permite agregar procesos luego del
    manejo de una excepcion. Estas se ejecutarán independientemente
    de si existe o no un error */
    console.log('Finaliza la revision de errores');
}

console.log('Continua el codigo');