// Arreglos auxiliares para desarrollo y pruebas
// const ingresos = [
//     new Ingreso('Salario', 120478.00),
//     new Ingreso('Venta Coche', 24200000)
// ];

// const egresos = [
//     new Egreso('Alquiler dpto', 49000),
//     new Egreso('Ropa', 4000)
// ];

const ingresos = [];

const egresos = [];

// Funciones Principal de carga de modulos
let cargarApp = () =>{
   cargarCabecero();
   cargarIngresos();
   cargarEgresos();
}



// Funciones auxiliares de Generales
let totalIngresos = () =>{
    let resultado = 0;
    for(let ingreso of ingresos){
        resultado += ingreso.valor
    }
    return resultado
}

let totalEgresos = () =>{
    let resultado = 0;
    for(let importe of egresos){
        resultado += importe.valor
    }
    return resultado
}


// Funciones auxiliares de Encabezado
let cargarCabecero = () =>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeDeEgreso = totalEgresos()/totalIngresos();
    if(isNaN(porcentajeDeEgreso)) porcentajeDeEgreso=0;

    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentual(porcentajeDeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}


// Funciones auxiliares de formatos
const formatoMoneda = (valor) =>{
    let forma = document.forms['forma'];
    let culture = forma['pais'].value;
    let moneda = getMoneda(culture);
    
    return valor.toLocaleString(culture,{style:'currency', currency:moneda, minimumFractionDigits:2});
}

const getMoneda = (culture)=>{
    let moneda = '';
    switch(culture){
        case 'es-MX':
            moneda = 'MXN';
            break;
        case 'pt-BR':
            moneda = 'BRL';
            break;
        case 'es-ES':
            moneda = 'EUR';
            break;
        case 'en-US':
            moneda = 'USD';
            break;
        default:
            moneda = 'ARS';
            break;
    }
    return moneda;
}
// const formatoMoneda = (valor) =>{
//     let idioma = 'es-AR';
//     let moneda = 'ARS'
//     return valor.toLocaleString(idioma,{style:'currency', currency:moneda, minimumFractionDigits:2});
// }

const formatoPorcentual = (valor) =>{
    return valor.toLocaleString('es-AR',{style:'percent', minimumFractionDigits:2})
}



// Funciones auxiliares de Ingresos
const cargarIngresos = () =>{
    let ingresosHTML = '';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) =>{
    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="trash-outline"
                        onclick="eliminarIngreso(${ingreso.id})" ></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;

    return ingresoHTML;
}

const eliminarIngreso = (id) =>{
    //funcionamiento similar a: for(let ingreso of ingresos)
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    // Eliminamos el elemento con el indice mediante splice
    ingresos.splice(indiceEliminar, 1);
    cargarApp();
    // cargarCabecero();
    // cargarIngresos();
}



// Funciones auxiliares de Egresos
const cargarEgresos = () =>{
    let egresosHTML = '';
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) =>{
    let egresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_porcentaje">${formatoPorcentual(egreso.valor/totalEgresos())}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="trash-outline"
                        onclick="eliminarEgreso(${egreso.id})"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
        `;
    return egresoHTML;
}

const eliminarEgreso = (id) =>{
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarApp();
    // cargarCabecero();
    // cargarEgresos();
}

// Funciones auxiliares de Agregacion

const agregarDato = () =>{
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];

    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +valor.value));//+valor.value = Number(valor.value)
        } else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value,Number(valor.value)))
        }
    }
    cargarApp();
}
