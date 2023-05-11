class Persona{
    // Declaracion de un atributo estatico
    static contadorInstancias = 0;
    // Constructor
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorInstancias
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

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString());
console.log(Persona.contadorInstancias);

let empleado1 = new Empleado('Maria', 'Monroe', 'Sistemas');
console.log(empleado1.toString());
console.log(Persona.contadorInstancias);

let persona2 = new Persona('Natalio', 'Higa');
console.log(persona2.toString());
console.log(Persona.contadorInstancias);
