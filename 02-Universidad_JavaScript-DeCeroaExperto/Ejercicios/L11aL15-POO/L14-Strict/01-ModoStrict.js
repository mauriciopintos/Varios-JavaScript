/*
    Nos permite detectar errores en la declaracion de variables y funciones
    ya que exige que estas sean declaradas/definidas de manera estricta 

    Se inicia con un string "use strict" en la primer linea del script o en la
    primer linea del interior del curpo de un bloque, como una funcion, por ejemplo.
*/

// Al estar la variable fuera del bloque estricto la puedo declarar de manera implicita
x= 10;
console.log(x);


const bloque = () => {
    "use strict"
    let y = 9;
    z = 7;
    console.log(y);
    console.log(z);
    /* Al estar en modo estricto no me permite acceder a los valores de
       variables no declaradas de manera explicita */
}

bloque()