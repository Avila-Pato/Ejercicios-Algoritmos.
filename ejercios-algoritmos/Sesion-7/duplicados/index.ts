// Verificar duplicados
// Implementá una función que reciba un array y devuelva true si tiene elementos repetidos
//  o false si no los tiene.

// tieneDuplicados([1, 2, 2, 3, 4, 4, 5]); // true
// tieneDuplicados([5, 5, 5, 5]); // true
// tieneDuplicados([1, 2, 3]); // false
// tieneDuplicados([]); // false
// tieneDuplicados([7, 3, 8, 3, 1, 9]); // true
function Duplicados(array: any) {

return new Set(array).size !== array.length;
// new Set(array).size es el array nuevo sin duplicados
// array.length es el array original con duplicados
    
}
console.log(Duplicados([1, 2, 2, 3, 4, 4, 5]))
console.log(Duplicados([1,2,3]))