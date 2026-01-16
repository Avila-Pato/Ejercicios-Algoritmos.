// Es letra
// Estamos intentando de enseñarle a unos JavaScript developers que en realidad '1' y 1 no son lo mismo.
// Para eso necesitamos que implementes una función que reciba un string y devuelva un booleano indicando
// si el string es una letra o no.

// esUnaLetra("a"); // true
// esUnaLetra("1"); // false

function EsLetra(str: string): boolean {
   return str.length === 1 ? isNaN(Number(str)) : false 
}

// str.length === 1
// → 1 caracter

// Number(str)
// "a" → NaN
// "1" → 1

// isNaN(...)


// isNaN(NaN) → true
// isNaN(1) → false
console.log(EsLetra("a")); // true
console.log(EsLetra("1")); // false
