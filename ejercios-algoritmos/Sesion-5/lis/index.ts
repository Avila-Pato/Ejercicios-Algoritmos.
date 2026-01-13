// LIS (Longest increasing subsequence)
// Se necesita implementar una función que recibe un array de enteros positivos cómo parámetro y tiene que devolver la secuencia incremental 
// más larga (LIS: Longest increasing subsequence). Una LIS es un set de la lista original en dónde los números están ordenados, del más chico 
// al más grande. La secuencia no tiene que ser contigua o única, y obviamente puede haber varias secuencias distintas.

// Por ejemplo: Si el array es [4, 3, 5, 1, 6] una posible LIS es [3, 5, 6] y otra es [1, 6]. Para este array, la función tiene que devolver 3
//  porque es el largo de la LIS más larga.


// [9, 9, 4, 2]  =>  1

// [10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]  =>  7

// Solucion con (O(n^2))



function LIS(nums: number[]): number {
    if(nums.length === 0) return 0 // si no hay elementos retorna 0

    const dp = new Array(nums.length).fill(1) // crea un array de 1 ejemplo  si tengo un array de  [9, 9, 4, 2]  =>  [1, 1, 1, 1]

    for (let i = 0; i < nums.length; i++) { // Primero loop de pocicionamiento actual entonces i es el numero actual que se evalua
        for (let j = 0;  j < i; j++) { // Segundo loop de pocicionamiento anteriores => j es el numero previo que se evalua
            if(nums[j] < nums[i]){ // entonces decimos que si el numero anterior es menor que el actual logicamente se esta evaluando
                dp[i] = Math.max(dp[i], dp[j] + 1) // si es asi entonces do[i] es igual al maximo entre dp[i] y dp[j] + 1
                                                // Math.max devuelve el mejor de dos argumentos por ejemplo dp[i] = 1, dp[j] = 4
            }
        }
    }
    return Math.max(...dp) // retorna el maximo de dp
    
}
const nums1 = [10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90] // son 7 porque la secuencia mas larga es [10, 22, 22, 33, 41, 50, 60]

// Estos son menores al siguiente nums por eso que la secuencia mas larga es 7

// 10 = 1
// 22 = 2
// 33 = 3
// 50 = 4
// 60 = 5
// 68 = 6
// 90 = 7

const nums2 = [9, 9, 4, 2] // son 1 porque la secuencia mas larga es [9]


console.log(LIS(nums1))
console.log(LIS(nums2))