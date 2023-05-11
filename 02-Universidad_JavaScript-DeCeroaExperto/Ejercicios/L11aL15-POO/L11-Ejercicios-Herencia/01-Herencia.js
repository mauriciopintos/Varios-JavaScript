class Persona{
    // Declaracion de un atributo estatico
    static contadorPersona = 0;
    // Constructor
    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersona
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._email = this.autoMail();
    }
    // Atributo dinamico
    email = 'default@mail.com';

    // Metodos
    get mail(){return this._email}
    set mail(mail){this._email = mail}
    get idPersona(){return this._idPersona;}
    get nombre(){return this._nombre;}
    set nombre(nombre){this._nombre = nombre;}
    get apellido(){return this._apellido;}
    set apellido(apellido){this._apellido = apellido;}
    get edad(){return this._edad;}
    set edad(edad){this._edad = edad;}

    info(){return `Persona ${this.idPersona} | ${this.nombre} ${this.apellido}, edad: ${this.edad}`;}
    toString(){return this.info();}
    autoMail(){return (`${this.nombre}.${this.apellido}@automail.com`).toLowerCase();}

}

class Empleado extends Persona{
    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad, departamento, sueldo){
        super(nombre, apellido, edad); // Llamar al constructor de la clase padre
        this._departamento = departamento;
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleado;
    }

    get departamento(){return this._departamento;}
    set departamento(departamento){this._departamento = departamento;}
    get idEmpleado(){return this._idEmpleado;}
    get sueldo(){return this._sueldo;}
    set sueldo(sueldo){this._sueldo = sueldo;}
    
    // Sobreescritura: super.metodoHeredado()
    info(){return `${super.info()} | Sueldo: ${this.sueldo} | Empleado: ${this.idEmpleado} | Detartamento: ${this.departamento}`;}
}

class Cliente extends Persona{
    static contadorCliente = 0;
    
    constructor (nombre, apellido, edad, registro = new Date().toISOString()) {
        super(nombre, apellido, edad);
        this._fechaResgistro = registro;
        this._idCliente = ++Cliente.contadorCliente;
    }

    get idCliente(){return this._idCliente;}
    get fechaResgistro(){return this._fechaResgistro;}
    set fechaResgistro(fecha){this._fechaResgistro = new Date(fecha);}

    info(){return `${super.info()} | Cliente: ${this.idCliente} | Registro: ${this.fechaResgistro}`;}

}


let persona1 = new Persona('Juan', 'Perez', 22);
console.log(persona1.toString());
console.log(Persona.contadorPersona);
console.log(persona1.mail);
persona1.mail = 'juan.perez@mail.com';
console.log(persona1.mail);


let empleado1 = new Empleado('Maria', 'Monroe', 28, 'Sistemas', 25800);
console.log(empleado1.toString());
console.log(Persona.contadorPersona);
console.log(empleado1.mail);

let cliente1 = new Cliente('Natalio', 'Higa', 34);
console.log(cliente1.toString());
console.log(Persona.contadorPersona);
console.log(cliente1.mail);
console.log(cliente1.fechaResgistro);
