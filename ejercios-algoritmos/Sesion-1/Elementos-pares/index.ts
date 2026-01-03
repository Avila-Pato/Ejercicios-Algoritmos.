// Elementos pares
// Dada una lista de elementos (array), crear una funcion que retorne una nueva lista con solo 
// los elementos que aparecen una cantidad pares de veces.

    // ["A","B","A","C","C","C","C"] // -> ["A","C"]
    // [1,2,3,1,2] // -> [1,2]

const abecedario = ["A","B","A","C","C","C","C"]

function ElementosPares(array: string[]): string[] {
    const contador: Record<string, number> = {}

    for(let i = 0; i < array.length; i++) {
        const letra = array[i]
        contador[letra] = (contador[letra] || 0) + 1
    }

    // 1 opcione ams rapida sin suar tantos for// return Object.keys(contador).filter(letra => contador[letra] % 2 === 0)  

    // 2 opcion con forIN

    const res: string[] = []
    for (const letra in contador) {
        // % 2 === 0 para saber si hay 2 del mismo caracter o numero 
        if(contador[letra] % 2 === 0)  {
            res.push(letra)
        }
    }
    return res
}
console.log(ElementosPares(abecedario))



