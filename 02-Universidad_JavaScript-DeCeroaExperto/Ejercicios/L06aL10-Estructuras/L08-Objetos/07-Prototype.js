// Funcion constructor de objetos
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    // Metodo en constructor
    this.nombreCompleto = function(){
        return `${this.nombre} ${this.apellido}`
    }
}

let padre = new Persona('Juan Carlos', 'Rodriguez', 'juanrodriguez@mimail.com');
console.log(padre.tel);

let madre = new Persona('Maria Laura', 'Molina', 'mariamolina@mimail.com');
console.log(madre.tel);

// Prototype: agrega propiedades a todos los objetos de ese tipo
Persona.prototype.tel = '47892547';

console.log(padre.tel);
console.log(madre.tel);

madre.tel = '41257896';
padre.tel = '42687951';

console.log(padre.tel);
console.log(madre.tel);
