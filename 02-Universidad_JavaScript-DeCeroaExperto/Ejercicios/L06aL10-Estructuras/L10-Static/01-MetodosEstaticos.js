class Persona{
    // Constructor
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    // Metodos
    get nombre(){return this._nombre;}
    set nombre(nombre){this._nombre = nombre;}
    get apellido(){return this._apellido;}
    set apellido(apellido){this._apellido = apellido;}
    info(){return `${this.nombre} ${this.apellido}`;}
    // Sobreescritura del metodo de la clase padre (Object) aplicando polimorfismo
    toString(){return this.info();}

    // Metodo estatico: se relaciona con la clase y no con los objetos que se instancien de la clase
    // Metodo estatico sin paramentro
    static saludar(){
        console.log('Saludos desde metodo estatico')
    }
    // Metodo estatico con paramentro de tipo Persona
    static saludar_(persona){
        console.log(`Saludos con ${persona.nombre.toUpperCase()}, desde metodo estatico`);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // Llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){return this._departamento;}
    set departamento(departamento){this._departamento = departamento;}
    // Sobreescritura: super.metodoHeredado()
    info(){
        return `${super.info()}, ${this.departamento}`;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.info());
// persona1.saludar(); no es posible llamar un metodo estatico desde una instancia de una clase
Persona.saludar(); // La salida se muetra e consola y no en Quokka
Persona.saludar_(persona1); // La salida se muetra e consola y no en Quokka

let empleado1 = new Empleado('Maria', 'Monroe', 'Sistemas');
console.log(empleado1.info());

Empleado.saludar(); // La salida se muetra e consola y no en Quokka
Empleado.saludar_(empleado1); // La salida se muetra e consola y no en Quokka
