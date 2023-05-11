class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    toString(){return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;}
}


class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    toString(){return `Gerente: ${super.toString()}, depto: ${this._departamento}`;}
}

function determinarTipo(instanciaDeClase){
    if(instanciaDeClase instanceof Gerente){
        console.log(instanciaDeClase.toString());
        console.log('Es una instancia de la clase Gerente')
    } else if(instanciaDeClase instanceof Empleado){
        console.log(instanciaDeClase.toString());
        console.log('Es una instancia de la clase Empleado')
    } else if(instanciaDeClase instanceof Object){
        console.log(instanciaDeClase.toString());
        console.log('Es una instancia de la clase Object')
    }
}

let gerente1 = new Gerente('Mariano Paez', 500000, 'Logistica');
let empleado1 = new Empleado('Mariano Paez', 500000);
let objeto1 = new Object();

console.log(gerente1.toString());

determinarTipo(gerente1);
determinarTipo(empleado1);
determinarTipo(objeto1);
