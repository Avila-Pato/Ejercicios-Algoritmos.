// Dado un arreglo de números enteros, encontrar aquel que aparece un número impar de veces.


[7]; // => 7, porque aparece 1 vez (que es impar).
[0]; // => 0, porque aparece 1 vez (que es impar).
[1, 1, 2]; // => 2, porque aparece 1 vez (que es impar).
[0, 1, 0, 1, 0]; // => 0, porque aparece 3 veces (que es impar).
[1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]; // => 4, porque aparece 1 vez (que es impar).

function FindImpar() {
    const arr: number[] = [0, 1, 0, 1, 2];

    return arr.filter((num) => num % 2 !== 0).length
}
console.log(FindImpar())