// 8. Registro de un libro: Cree un objeto llamado libro con las propiedades: título, autor,
// número de páginas y género. Luego imprima un mensaje descriptivo usando estas
// propiedades, por ejemplo:
// "El libro '___' del autor ___ pertenece al género ___."

let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 471,
    genero: "Realismo mágico"
};

console.log(
`El libro ${libro.titulo}
del autor ${libro.autor} 
del genero ${libro.genero}
tiene un total de ${libro.paginas} paginas.      
`);