/*  */
class DispositivoEntrada{
    constructor(marca, tipoEntrada){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){return this._tipoEntrada}
    set tipoEntrada(tipoEntrada){this._tipoEntrada = tipoEntrada}
    get marca(){return this._marca}
    set marca(marca){this._marca = marca}
    toString(){return `${this._marca} | ${this._tipoEntrada}`}
}

class Raton extends DispositivoEntrada{
    static contadorRaton = 0;
    constructor(marca, tipoEntrada){
        super(marca, tipoEntrada);
        this._idRaton = ++Raton.contadorRaton;
    }
    get idRaton(){return this._idRaton}
    toString(){return `Raton: [${this._idRaton} | ${super.toString()}]\n`}
}

class Teclado extends DispositivoEntrada{
    static contadorTaclado = 0;
    constructor(marca, tipoEntrada){
        super(marca, tipoEntrada);
        this._idTeclado = ++Teclado.contadorTaclado;
    }
    get idTeclado(){return this._idTeclado}
    toString(){return `Teclado: [${this._idTeclado} | ${super.toString()}]\n`}
}

/* */
class Computadora{
    static contadorComputadoras = 0;
    constructor (nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get idComputadora(){return this._idComputadora}
    get nombre(){return this._nombre}
    set nombre(nombre){this._nombre = nombre}
    get monitor(){return this._monitor}
    set monitor(monitor){this._monitor = monitor}
    get teclado(){return this._teclado}
    set teclado(teclado){this._teclado = teclado}
    get raton(){return this._raton}
    set raton(raton){this._raton = raton}

    toString(){return `Computadora: ${this._nombre}\n ${this._monitor} ${this._teclado} ${this._raton}\n`}
}

/*  */
class Monitor{
    static contadorMonitor = 0;
    constructor(marca, tamanio){
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamanio = tamanio;
    }
    get idMonitor(){return this._idMonitor}
    get marca(){return this._marca}
    set marca(marca){this._marca = marca}
    get tamanio(){return this._tamanio}
    set tamanio(tamanio){this._tamanio = tamanio}
    toString(){return `Monitor: [${this._idMonitor} | Marca: ${this._marca} | Tamaño: ${this._tamanio}"\n`}
}

/*  */
class Orden{
    contadorOrden = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._computadoras = []; //Array.Computadora()
    }
    get idOrden(){this._idOrden}
    toString(){return `Orden: ${this._idOrden} \n ${this._computadoras}`}
    agregarComputadora(computadora){this._computadoras.push(computadora)}
}

let tec1 = new Teclado('Genius', 'USB');
console.log(tec1.toString());
console.log(tec1.toString());

let mouse1 = new Raton('Dell', 'USB');
console.log(mouse1.toString());

let mon1 = new Monitor('Samsung', '17');
console.log(mon1.toString());

let compu1 = new Computadora('Clon',mon1,tec1,mouse1);
console.log(compu1.toString());
// console.log(${compu1});

let pedido1 = new Orden();
pedido1.agregarComputadora(compu1)
pedido1.agregarComputadora(compu1)
pedido1.agregarComputadora(compu1)
pedido1.agregarComputadora(compu1)

console.log(compu1.toString());
console.log(pedido1.toString());
