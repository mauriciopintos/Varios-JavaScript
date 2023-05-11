// Sumar todos los argumentos
let resultado = sumarTodo(2, 3, 5, 7, 9, 2, 7, 6);
console.log(resultado);
resultado = sumarTodo();
console.log(resultado);

function sumarTodo() {
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]
    }
    return suma;
};