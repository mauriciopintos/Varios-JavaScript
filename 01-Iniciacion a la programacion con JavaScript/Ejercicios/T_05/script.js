//Array numerico
const numeros = [10,12,4,78,26,9,30,27];

//Con forEach
var suma_forEach = 0;
numeros.forEach( e => {
    suma_forEach+=e
});
console.log('Suma con forEach: ',suma_forEach);

//Con forEach como objeto
var suma=0;
numeros.forEach((n)=>{suma+=n});
console.log('Suma con forEach como objeto: ',suma);


//Con for indexado
var suma_for = 0;
for (var i=0; i<=numeros.length-1; i++){
    suma_for+=numeros[i]
};
console.log('Suma con for: ',suma_for);


//Con for por elementos
var suma_for_E = 0;
for (let numero of numeros ){
    suma_for_E+=numero
};
console.log('Suma con for por elementos: ',suma_for_E);
