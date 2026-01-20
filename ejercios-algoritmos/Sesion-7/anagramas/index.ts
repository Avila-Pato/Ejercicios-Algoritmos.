// Anagramas
// Implementá una función que determine si dos strings son anagramas. Dos palabras son anagramas 
// si contienen exactamente las mismas letras pero en diferente orden. 
// La función debe ignorar espacios y ser case-insensitive.

// sonAnagramas("listen", "silent"); // true
// sonAnagramas("elbow", "below"); // true
// sonAnagramas("study", "dusty"); // true
// sonAnagramas("hello", "world"); // false
// sonAnagramas("A gentleman", "Elegant man"); // true

function sonAnagramas(str1: string,  str2: string): boolean {
        const normalizer = (str: string) => 
            str.toLowerCase().split("").sort().join("")
        return normalizer(str1) === normalizer(str2)
}

function Anagrama2(str1: string, str2: string): boolean {
        return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")
}

console.log(Anagrama2("roma", "amor")); // true
console.log(Anagrama2("perro", "gato")); // false
console.log(Anagrama2("Listen", "Silent")); // true


// console.log(sonAnagramas("roma", "amor")); // true
// console.log(sonAnagramas("perro", "gato")); // false
// console.log(sonAnagramas("Listen", "Silent")); // true
