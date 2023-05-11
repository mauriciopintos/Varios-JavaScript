// Llmadas asincronas con setTimeout
function funcionCallback(){
    console.log('Saludo asincrono despues de 5 segundos');
}
setTimeout(funcionCallback, 5000);

setTimeout( function(){console.log('Saludo asincrono despues de 13 segundos')}, 13000);

setTimeout( () => console.log('Saludo asincrono despues de 6 segundos'), 6000);

