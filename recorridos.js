// b) Recorridos del Arreglo
// Con el arreglo resultante de la actividad anterior:
// a. Recorra el arreglo utilizando for mostrando posición y valor.
// b. Luego, recórrelo utilizando for...of, mostrando únicamente los valores.
// c. En pareja, discutan y escriban una conclusión breve:
// i. ¿Cuándo es más útil for?
// ii. ¿Cuándo es más útil for...of?

let verduras = ['lechuga', 'tomate', 'zanahoria', 'pepino']; // Arreglo inicial

// a. Recorrido con for
for (let i = 0; i < verduras.length; i++) {
    console.log(`Posición ${i}: ${verduras[i]}`);
}

// b. Recorrido con for...of
for (let verdura of verduras) {
    console.log(`Valor: ${verdura}`);
}

// c. Conclusiones:
// i. for es mas util cuando necesitamos recorrer y conocer las posiciones //
// ii. for..of es mas util cuando solo necesitamos los valores sin importar las posiciones //

