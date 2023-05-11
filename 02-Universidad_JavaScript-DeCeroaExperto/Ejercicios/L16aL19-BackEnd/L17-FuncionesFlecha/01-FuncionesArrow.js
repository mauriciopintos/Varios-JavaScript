// Funcion explicita
function funcionExplicita(){
    console.log('Saludo desde funcion explicita');
}
funcionExplicita();

/* Con las funciones anonimas y arrow no se puede usar el concepto de hoisting
   ya que la funcion està asociada a una variable, la misma se debe declarar
   antes de ser invocada */
// Funcion anonima
let funcionAnonima = function (){
    console.log('Saludo desde funcion anonima');
}
funcionAnonima();

// Funcion arrow/flecha
let funcionFlecha = () => {
    console.log('Saludo desde funcion arrow');
}
funcionFlecha();

// Funcion arrow/flecha en una linea
let funcionFlechaEnUnaLinea = () => console.log('Saludo desde funcion arrow en una linea'); //No es compatible con Quokka
funcionFlechaEnUnaLinea();

// Funcion arrow/flecha en una linea con retorno
let funcionFlechaEnUnaLineaConRetorno = () => 'Saludo desde funcion arrow con retorno';
console.log(funcionFlechaEnUnaLineaConRetorno());

// Funcion arrow/flecha en una linea con retorno de objeto
let funcionFlechaEnUnaLineaConRetornoDeObjeto = () => ({nombre: 'Mariano', DNI: '3006547'})
console.log(funcionFlechaEnUnaLineaConRetornoDeObjeto());

// Funcion arrow/flecha en una linea con parametro
let mensaje = 'Saludo desde funcion arrow en una linea con parametros';
let funcionFlechaEnUnaLineaConParametro = parametro => console.log(parametro); //No es compatible con Quokka
funcionFlechaEnUnaLineaConParametro(mensaje);

// Funcion arrow/flecha en una linea con varios parametros
let x = 7;
let y = 2;

let funcionFlechaEnUnaLineaConParametros = (parametro1,parametro2) => `El producto es: ${parametro1*parametro2}`; //No es compatible con Quokka
console.log(funcionFlechaEnUnaLineaConParametros(x,y));
