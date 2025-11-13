// 3. Notas de actividades: Cree un arreglo con seis notas numéricas. Recorra el arreglo
// usando for y calcule el promedio (no use funciones externas).


let notas = [4.5, 3.8, 4.2, 5, 3.5, 4];
console.log("Notas:", notas);

let suma = 0;
for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
}

let promedio = suma / notas.length;
console.log("Suma total:", suma);
console.log("Promedio:", promedio);