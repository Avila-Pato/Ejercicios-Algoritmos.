// Gira sarbalap
// Escriba una función que tome una cadena de una o más palabras y devuelva la misma cadena, pero con todas las palabras de cinco o más letras invertidas
//  (como el nombre de esta Kata). Las cadenas pasadas solo consistirán en letras y espacios. Los espacios solo se incluirán cuando haya más de una palabra presente.

// Ejemplos
// girar("Hola como estás"); // => "Hola como sátes"
// girar("Esto es una prueba"); // => "Esto es una abeurp"

// aqui no se puede suar filter porque filter comunmente se usa para quitar palabras, elimiabnr o filtrar segun la condicion.
function Sarbalap(str: string) {
    return str.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ');
}
console.log(Sarbalap("Hola como estás"));
console.log(Sarbalap("Esto es una prueba"));