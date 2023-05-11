// No es recomendable su uso

// Interrumpir un ciclo (break) e ir a la etiqueta
// Busca el primer numero par (ejemplo muy feo)
etiqueta1:
for(let contador = 0; contador <=10; contador++){
    if(contador % 2 == 0){
        console.log(contador);
        break etiqueta1;
    }
}

// Continuar con la siguiente iteracion deun ciclo (Continue) e ir a la etiqueta
// Busca los numeros pares entre 0 y 10
etiqueta2:
for(let contador = 0; contador <=10; contador++){
    if(contador % 2 !== 0){
        continue etiqueta2;
    }
    console.log(contador);
}