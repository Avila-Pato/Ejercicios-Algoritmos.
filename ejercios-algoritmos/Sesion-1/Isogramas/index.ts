// Isograma
// Un isograma es una palabra que no tiene letras repetidas. Consideraciones Adicionales:

// Un string vacío es un isograma.
// La función tiene que ser case insensitive e ignorar acentos.
// Si el string tiene mas de una palabra retornar false.
// Se tiene que hacer clean up del string antes de comparar.
// Ejemplos:

// func("Murciélago"); // returns true
// func("reto"); // returns true
// func("Casa"); // returns false
// func("PeRrO"); // returns false
// func("GaTo"); // returns true

function Isograma(str : string) {

    const cleanString = str
    .split(' ')
    .join('')
    .toUpperCase()

    // Guarda los valores  unicos
    // si se intenta meter algo repetido lo ignora
    const uniqueChars = new Set(cleanString)

    // uniqueChars.size => cuantas letras distintas hay?
    // cleanString.length => cuantas letras hay en total? 
    return uniqueChars.size === cleanString.length    
}

console.log(Isograma("Murciélago"));
console.log(Isograma("reto"));
console.log(Isograma("Casa"));
console.log(Isograma("PeRrO"));
console.log(Isograma("GaTo"));