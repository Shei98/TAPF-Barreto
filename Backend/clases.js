class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return (`${this.nombre} ${this.apellido}`);
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombre1, autor1){
        this.libros.push({nombre:nombre1, autor:autor1});
    }
    
    getBooksName(){
        return this.libros.map((libro) => libro.nombre)
    }
}

const usuario = new Usuario("Pablo", "Peralta", [{nombre:"Libro 1", autor:"Autor 1"}], []);

usuario.addBook("Libro 2","Autor2");
usuario.addMascota("Perro");
usuario.addMascota("Gato");

console.log(usuario.getFullName(),
            usuario.countMascotas(),
            usuario.getBooksName(),);