// Mover los ceros al final
// Escribir una función que tome un array de valores y retorne el mismo array pero moviendo los ceros al final.

// Ejemplo:

// moverCeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // [false,1,1,2,1,3,"a",0,0]
// Bonus: Implementar la función sin usar una variable de contador

function moverCeros(arr:( string | number | boolean)[])  {
    for (let i = 0; i < arr.length; i++) {

        if(arr[i]=== 0) {
            // - quita el cero de la pocicion que esta el array
            arr.splice(i, 1) 
            // agrega el cero al final  
            arr.push(0)
        }
    }
    // retorna el array 
    return arr
}
console.log(moverCeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));