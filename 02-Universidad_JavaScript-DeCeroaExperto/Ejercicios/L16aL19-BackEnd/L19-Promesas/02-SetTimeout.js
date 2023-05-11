let promesa = new Promise((resolver) => {
    console.log('Inicio promesa')
    setTimeout( () => resolver('Saludo conpromesa y timeout'), 3000);
    console.log('fin promesa')
});

promesa.then(valor => console.log(valor));