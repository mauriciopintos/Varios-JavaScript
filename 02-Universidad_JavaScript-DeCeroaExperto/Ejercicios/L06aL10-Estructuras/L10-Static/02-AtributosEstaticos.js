class Persona{
    // Declaracion de un atributo estatico
    static contadorInstancias = 0;

    // Constructor
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorInstancias++
    }
   
    // Metodos
    get nombre(){return this._nombre;}
    set nombre(nombre){this._nombre = nombre;}
    get apellido(){return this._apellido;}
    set apellido(apellido){this._apellido = apellido;}
    info(){return `${this.nombre} ${this.apellido}`;}
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
console.log(persona1.contadorInstancias); //no es posible consultar un atributo estatico desde una instancia de una clase
console.log(Persona.contadorInstancias);

let empleado1 = new Empleado('Maria', 'Monroe', 'Sistemas');
console.log(empleado1.info());
console.log(Persona.contadorInstancias);
