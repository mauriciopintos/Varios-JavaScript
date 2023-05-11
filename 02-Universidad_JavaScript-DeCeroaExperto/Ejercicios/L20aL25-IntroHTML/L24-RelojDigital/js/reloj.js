const mostrarReloj = () =>{
    let fecha = new Date();
    let hh = formatoValor(fecha.getHours());
    let min = formatoValor(fecha.getMinutes());
    let ss = formatoValor(fecha.getSeconds());
    let horaTexto = `${hh}:${min}:${ss}`
    document.getElementById('hora').innerHTML = horaTexto;

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'oct', 'Nov', 'Dic'];
    const dias = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa']
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto

    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoValor = (valor) =>{
    if(valor<10){
        valor = `0${valor}`;
    }
    return valor;
}
setInterval(mostrarReloj,1000);