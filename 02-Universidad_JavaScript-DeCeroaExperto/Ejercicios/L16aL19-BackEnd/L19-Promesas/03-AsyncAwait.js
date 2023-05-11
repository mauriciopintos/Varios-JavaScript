// async indica que una funcion retorna una promesa

async function funcionConPromesa(){
    return 'Retorno con promesa y async';
}

funcionConPromesa().then(valor => console.log(valor)); // salida por conola no por Quokka
console.log(funcionConPromesa());

// Await espera el resultado de una promesa de async
async function funcionConPromesaAwait(){
    let promesa = new Promise( resolver => {
        resolver('Retorno con promesa y async/await');
    });
    console.log(await promesa);
}

funcionConPromesaAwait();