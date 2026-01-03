// Palindromos
// Un palindromo es una palabra, frase, número o secuencia de caracteres que se lee igual al derecho o al reves.

// Ejemplo:

// 232
// 110011
// 54322345
// Escribir una función que verifique si un números puede ser reordenado para formar un palíndromo.

// Nota: Los valores siempre serán numéricos y positivos.

// Ejemplo:

// 5        =>  true
// 2121     =>  false
// 1331     =>  true
// 3357665  =>  false
// 1294     =>  false

function Palindromo(str: string): boolean {
    const reversed = str.split('').reverse().join('')
        if(str === reversed) return true
        return false
}

console.log(Palindromo('5'))
console.log(Palindromo('2121'))