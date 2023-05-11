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
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona('Maria Laura', 'Molina', 'mariamolina@mimail.com');
console.log(madre);
console.log(madre.nombreCompleto());
