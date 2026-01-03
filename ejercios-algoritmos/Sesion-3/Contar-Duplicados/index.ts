// Contar duplicados
// Escribir una función que devuelva la cantidad de caracteres alfabéticos y dígitos numéricos distintos, 
// sin distinguir entre mayúsculas y minúsculas, que aparecen más de una vez en la cadena de entrada. 
// Se puede suponer que la cadena de entrada solo contiene letras (mayúsculas y minúsculas) y dígitos numéricos.

// "abcde" -> 0 // => ningún carácter se repite más de una vez
// "aabbcde" -> 2 // => 'a' y 'b'
// "aabBcde" -> 2 // => 'a' aparece dos veces y 'b' dos veces (b y B)
// "indivisibility" -> 1 // => 'i' aparece seis veces
// "Indivisibilities" -> 2 // => 'i' aparece siete veces y 's' dos veces
// "aA11" -> 2 // => 'a' y '1'
// "ABBA" -> 2 // => 'A' y 'B' aparecen dos veces cada uno

function ContarDuplicados(str: string) {
    
    const result: string[] = [];

    const element = str.toLowerCase();

    for (let i = 0; i < element.length; i++) {
        if(!result.includes(element[i]  ) ) {
            if(element.split(element[i]).length > 2) {
                result.push(element[i]);
            } 
        }    
    }
    // Si queremos saber cuantos elementos hay comoa rray 
    // return result
    return result.length
}

console.log(ContarDuplicados("aA11"));
console.log(ContarDuplicados("ABBA"));
console.log(ContarDuplicados("abcde"));
console.log(ContarDuplicados("aabbcde"));
console.log(ContarDuplicados("aabBcde"));
console.log(ContarDuplicados("indivisibility"));
console.log(ContarDuplicados("Indivisibilities"));