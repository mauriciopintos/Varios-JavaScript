async function promesaConAwaitTimeout(){
    console.log('Inicio de promesa');

    let promesa = new Promise(resolver => {
        setTimeout( () => resolver('Promesa con await y timeout', 5000));
    });
    console.log(await promesa);
    
    console.log('Fin de promesa');
}

promesaConAwaitTimeout();