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
// Imprimir directamente el objeto
console.log(persona);

// Imprimir concatenando los valores
console.log(`${persona.nombre} ${persona.apellido}, ${persona.edad} años, ${persona.email}`);
console.log(persona.nombre + ' ' + persona.apellido + ', ' + persona.edad + ' años, ' + persona.email);

// for in
for(propiedad in persona){
    console.log(persona[propiedad]);
}

// Object.values
let personaArray = Object.values(persona);
console.log(personaArray);

// JSON.stringify
let personaString = JSON.stringify(persona);
console.log(personaString);
