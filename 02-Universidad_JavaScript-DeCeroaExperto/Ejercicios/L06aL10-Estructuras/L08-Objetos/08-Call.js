let persona1 = {
    nombre: 'Juan',
    apellido: 'Gimenez',
    email: 'juan.gimenez@correo.com',
    edad: 26,
    // Metodos
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`;
    },
    
    info: function(titulo, tel){
        return `${titulo}: ${this.nombre} ${this.apellido}, ${tel}`;
    }
}

let persona2 = {
    nombre: 'Mariano',
    apellido: 'Larousse'
}

console.log(persona1.nombreCompleto());

// Uso de Call para llamar al metodo de un objeto con los datos de otro
console.log(persona1.nombreCompleto.call(persona2));
console.log(persona1.info.call(persona2, 'Ingniero', '47859624'));
