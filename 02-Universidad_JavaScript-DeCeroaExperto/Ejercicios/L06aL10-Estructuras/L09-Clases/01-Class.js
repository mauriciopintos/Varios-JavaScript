// NO es posible instanciar objetos antes de declarar su clase
// No se aplica el concepto de hoisting
// let personaX = new Persona('Karina', 'Rojas')

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);

persona1.nombre = 'Jonatan';
console.log(persona1.nombre);

let persona2 = new Persona('Carlos', 'Rozas');
console.log(persona2);

let persona3 = new Persona('Karina', 'Rojas')
console.log(persona3);
