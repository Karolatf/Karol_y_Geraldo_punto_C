/*d) Arreglo de Objetos (Integración)
a. Construyan un arreglo llamado inventario que contenga al menos 3 objetos,
cada uno representando un elemento diferente (por ejemplo, cuadernos,
teclados, audífonos, etc.).
b. Cada objeto debe tener mínimo 3 propiedades.
c. Recorra el arreglo usando for...of e imprima una propiedad específica de cada
objeto, por ejemplo, su nombre o su uso principal.*/

//A//
let inventario = ['martillo', 'llaves', 'clavos' ];

//B//
let martillo = {
    color: "rojo",
    tamaño: 5,
    proposito: "martillar objetos"
};

let llaves = {
    color: "azul",
    tamaño: "pequeño",
    proposito: "ajustar y desajustar"
};

let clavos = {
    color: "gris",
    tamaño: "pequeños",
    proposito: "sostener "
};

console.log(martillo, llaves, clavos);


//C//

console.log("Recorrido con for tradicional:");
for (let i = 0; i < inventario.length; i++) {
    console.log("Posición " + i + ": " + inventario[i]);
}


console.log("Recorrido con for...of mostrando el color de cada objeto:");
for (let item of inventario) {
    if (item === 'martillo') {
        console.log("- " + item + ": " + martillo.color);
    }
    if (item === 'llaves') {
        console.log("- " + item + ": " + llaves.color);
    }
    if (item === 'clavos') {
        console.log("- " + item + ": " + clavos.color);
    }
}