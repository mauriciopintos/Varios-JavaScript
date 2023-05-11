let persona = {
    // Propiedades
    nombre: 'Juan',
    apellido: 'Gimenez',
    email: 'juan.gimenez@correo.com',
    edad: 26,
    idioma: 'es',

    // Metodos get y set
    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    },

    get lang(){
        return this.idioma.toUpperCase();
    },

    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
}
// Uso del metodo get
console.log(persona.nombreCompleto);
console.log(persona.lang);


// Uso del metodo set
persona.lang = 'en-uk';
console.log(persona.lang);