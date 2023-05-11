class Persona{
    // Declaracion de un atributo estatico
    static contadorInstancias = 0;

    // Constante estatica (es en realidad un metodo get sin set)
    static get MAX_OBJ(){return 3;} 

    // Constructor
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorInstancias < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorInstancias;
        } else {
            console.log('Se supero el maximo de instancias permitidas');
        }
    }
    // Atributo dinamico
    email = 'default@mail.com';

    // Metodos
    get nombre(){return this._nombre;}
    set nombre(nombre){this._nombre = nombre;}
    get apellido(){return this._apellido;}
    set apellido(apellido){this._apellido = apellido;}
    info(){return `${this.idPersona}, ${this.nombre} ${this.apellido}`;}
    toString(){return this.info();}
    autoMail(){return (`${this.nombre}.${this.apellido}@automail.com`).toLowerCase();}

}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // Llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){return this._departamento;}
    set departamento(departamento){this._departamento = departamento;}
    // Sobreescritura: super.metodoHeredado()
    info(){return `${super.info()}, ${this.departamento}`;}
}

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 8 // No funciona porque no existe el metodo set

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.info())

let persona2 = new Persona('Natalio', 'Higa');
console.log(persona2.info())

let empleado1 = new Empleado('Maria', 'Monroe', 'Sistemas');
console.log(empleado1.info())

let empleado2 = new Persona('Monica', 'Aguirre');
console.log(empleado2.info())
