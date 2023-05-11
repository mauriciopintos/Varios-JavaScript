let persona = {
    // Propiedades
    nombre: 'Juan',
    apellido: 'Gimenez',
    email: 'juan.gimenez@correo.com',
    edad: 26,
    // Metodos
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`;
    }
}

console.log(persona);

// Agregamos una nueva propiedad al objeto
persona.tel = '47898714';
console.log(persona);

// Modificamos el valor de una nueva propiedad del objeto
persona.tel = '47898755';
console.log(persona);

// Eliminamos una propiedad del objeto
delete persona.tel;
console.log(persona);
