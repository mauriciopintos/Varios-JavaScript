class Persona{
    // Declaracion de un atributo estatico
    static contadorInstancias = 0;
    // Constructor
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorInstancias++
    }
    // Atributo dinamico
    email = 'default@mail.com';

    // Metodos
    get nombre(){return this._nombre;}
    set nombre(nombre){this._nombre = nombre;}
    get apellido(){return this._apellido;}
    set apellido(apellido){this._apellido = apellido;}
    info(){return `${this.nombre} ${this.apellido}`;}
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
console.log(Persona.email); //no es posible consultar un atributo dinamico desde una clase
console.log(persona1.email);

let empleado1 = new Empleado('Maria', 'Monroe', 'Sistemas');
console.log(empleado1.info());
console.log(empleado1.email);
empleado1.email = empleado1.autoMail();
console.log(empleado1.email);
