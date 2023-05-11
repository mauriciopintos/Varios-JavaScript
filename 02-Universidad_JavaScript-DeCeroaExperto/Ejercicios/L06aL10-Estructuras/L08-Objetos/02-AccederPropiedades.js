let persona = {
    // Propiedades
    nombre: 'Juan',
    apellido: 'Gimenez',
    email: 'juan.gimenez@correo.com',
    edad: 26,
    // Metodos
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`
    }
}

console.log(persona.nombre);
console.log(persona['nombre']);

// for in: Recorrer un objeto
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]); 
}