// String termina con

// Hacer una función que reciba 2 strings (siempre los va a recibir), y devuelva si el primero termina con el segundo. Ejemplos:

// Ejemplo 

// func("abc", "bc"); // returns true

// func("abc", "d"); // returns false

function StringTermina(str1: string, str2: string) {
   return str1.slice(-str2.length) === str2
}

console.log(StringTermina("abc", "abc"))
console.log(StringTermina("abc", "d"))

function StringTerminaEndWith(str1: string, str2: string) {
   return str1.endsWith(str2)
}
console.log(StringTerminaEndWith("abc", "abc"))
console.log(StringTerminaEndWith("abc", "d"))