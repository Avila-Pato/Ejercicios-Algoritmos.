// Números perdidos
// Dado un array de números enteros positivos que debería contener números consecutivos del 1 al N,
//  pero le faltan algunos números, implementá una función que devuelva un array con todos los números que faltan.

// numerosPerdidos([1, 3, 5, 7]); // [2, 4, 6]
// numerosPerdidos([2, 4, 6, 8]); // [1, 3, 5, 7]
// numerosPerdidos([1, 2, 3, 4, 5]); // []
// numerosPerdidos([3, 1, 4]); // [2]

function numerosPerdidos(numeros: number[]): number[] {
    const maxNumero = Math.max(...numeros);
    // const maxNumero = Math.max(...numeros); // Encuentra el número máximo en el array para definir el rango
    const numerosPerdidos: number[] = [];


    for (let i = 1; i <= maxNumero; i++) {
        if (!numeros.includes(i)) {
            //El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
            // en este caso verifica si el numero i no esta en el array numeros
            numerosPerdidos.push(i);
        }
    }

    return numerosPerdidos;
}
console.log(numerosPerdidos([1, 3, 5, 7]));
console.log(numerosPerdidos([2, 4, 6, 8]));
console.log(numerosPerdidos([1, 2, 3, 4, 5]));
console.log(numerosPerdidos([3, 1, 4]));
