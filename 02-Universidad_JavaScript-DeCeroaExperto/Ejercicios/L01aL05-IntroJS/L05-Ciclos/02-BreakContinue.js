// Interrumpir un ciclo (break)
// Busca el primer numero par (ejemplo muy feo)
for(let contador = 0; contador <=10; contador++){
    if(contador % 2 == 0){
        console.log(contador);
        break;
    }
}

// Continuar con la siguiente iteracion deun ciclo (Continue)
// Busca los numeros pares entre 0 y 10
for(let contador = 0; contador <=10; contador++){
    if(contador % 2 !== 0){
        continue;
    }
    console.log(contador);
}