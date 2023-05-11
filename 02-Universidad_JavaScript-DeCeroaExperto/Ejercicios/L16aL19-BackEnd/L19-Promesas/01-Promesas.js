let unaPromesa = new Promise((resolver, rechazar) => {
    let expresion = !true;
    if(expresion){
        resolver('Resolvio correctamente')
    } else {
        rechazar('Se produjo un error');
    }
});

unaPromesa.then(valor => console.log(`Primer llamado .then valor ${valor}`), error => console.log(`Primer llamado .then error ${error}`));

unaPromesa
.then(valor => console.log(`.then ${valor}`))
.catch(error => console.log(`.catch ${error}`));
s