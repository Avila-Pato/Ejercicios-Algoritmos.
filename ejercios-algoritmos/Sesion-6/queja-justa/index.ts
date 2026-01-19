// Queja justa

// Hay un revuelo en la puerta del colegio, un grupo de manifestantes dicen que la disparidad de letras en las 
// palabras usadas en los libros de texto es muy marcada. Luego de contar te das cuenta que tienen razón.
//  Ahora tenés que crear una función que dada una palabra, diga si la cantidad de letras en ella tiene la misma 
// cantidad de ocurrencias.

// quejaJusta("abcabc"); // true
// quejaJusta("palangana"); // false


function quejaJusta(palabra: string) {
    const contadorLetras: Record<string, number> = {}

    for (const letra of palabra) {
        contadorLetras[letra] = (contadorLetras[letra] || 0) + 1 
        // contando las palabras que se estan repitiendo
        // contadorLetras[letra] =  busca las veces que ya aparecio la letra
        // || 0 si no aparecio, le asigna 0
        // + 1 le suma 1 a la cantidad de veces que aparecio esa letra
    }
    return contadorLetras[palabra[0]] === contadorLetras[palabra[palabra.length - 1]] 
    // comparando la primera letra con la ultima letra

    // palabra[0] es la primera letra
    // ejemplo  "banana"[0] -> b

    // palabra[palabra.length - 1] es la ultima letra
    // ejemplo "banana".length -> 6
    // "banana"[6 - 1] -> "a" igual a "banana"[5] -> "a" osea 5 letra en total de la palabra "banana".
}


console.log(quejaJusta("abcabc")); // true
console.log(quejaJusta("palangana")); // false
console.log(quejaJusta("aabbcc")); // true
console.log(quejaJusta("aaabbbccc")); // true
console.log(quejaJusta("aaabbbcc")); // false
