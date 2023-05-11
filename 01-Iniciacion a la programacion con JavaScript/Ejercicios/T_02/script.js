window.onload = function() {
    const titulo = document.querySelector('h1');
    const parrafo = document.querySelector('p');
    const parrafoId = document.querySelector('#IdParrafo');
    const parrafoClase = document.querySelector('.parrafoClase');
    const agregado = document.querySelector('#agregado');
    titulo.innerHTML = "Titulo <br> Editado desde JavaScript <br><hr><hr>";
    parrafo.innerText = "Este parrafo no inserta html <br>";
    parrafo.setAttribute('class', 'amarillo');
    parrafoId.setAttribute('class', 'verde');
    titulo.classList.add('mas_grande');
    parrafoClase.classList.remove('rojo');
    console.log(titulo.getAttribute('class'));

    //creando elementos
    const imagen = document.createElement('img');
    const url = 'https://picsum.photos/700/400?random';
    imagen.setAttribute('src', url);
    const parrafoNuevo = document.createElement('p');
    parrafoNuevo.innerText = 'Parrafo nuevo agregado desde javascript';
    agregado.append(imagen);
    agregado.append(parrafoNuevo);

}

