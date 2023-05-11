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
    // Sobreescritura del metodo toString() mediante super.
    toString(){return `Gerente: ${super.toString()}, depto: ${this._departamento}`;}
}

let gerente1 = new Gerente('Mariano Paez', 500000, 'Logistica');

console.log(gerente1.toString());