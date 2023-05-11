console.log('Backend de calculadora');

function sumar(){
    const forma = document.getElementById('formulario');
    let opA = forma['operandoA'];
    let opB = forma['operandoB'];
    let resultado = parseInt(opA.value) + parseInt(opB.value);
    if(isNaN(resultado)){ resultado= 'Ingrese valores numericos validos'};
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}
