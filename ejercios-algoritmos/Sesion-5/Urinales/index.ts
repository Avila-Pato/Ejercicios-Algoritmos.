// Urinales libres
// En los baños de hombre hay una regla inquebrantable que es dejar un urinal libre entre vos y la persona de al lado. Por ejemplo,
// si hay 3 urinales y una persona está en el urinal de la izquierda, vos tenes que ir inmediatamente al de la derecha. 
// Con esto podemos decir que un máximo de 3 personas puede orinar si hay 5 urinales y sólo 2 si hay 4.

// Tú tarea: Escribir una función que retorne la cantidad máxima de urinales libres (un entero) siguiendo la regla que mencionamos.

// Input: Un string que contiene 1s y 0s (Por ejemplo: 10001) (1 <= Urinales <= 20) Los 1 significa que el urinal está ocupado y 0 está libre

// Nota: Si hay un error en el string como por ejemplo: 011, retornar -1

// "10001" => 1 (10101)
// "1001" => 0 (1001)
// "00000" => 3 (10101)
// "000" => 2 (101)
// "01000" => 1 (01010 o 01001)

function maxUrinalesLibres(urinales: string) {
    // validaciones
    if(urinales.includes("11")) return -1  // significa que hay 2 personas juntas

    let arr = urinales.split("") // ["1", "0", "0", "0", "1"] // split convierte un string a un array
    let count = 0
    
    //recorrer los urinales
    for (let i = 0; i < arr.length; i++) {
        
        // if para verificar que no haya nadie al lado
        if(arr[i] === "0" && // el urinal debe estar libre por eso empezamos con 0 

            // si al inicio no tiene vecino izquierdo o el vecino izquierdo tambien esta libre
            (i === 0 || arr[i - 1] === "0") &&

            // y si esta al final no tiene vecino derecho o el vecino derecho esta libre
            (i === arr.length - 1 || arr[i + 1] === "0")
         ) {
            // se marca el urinal como ocupado
            arr[i] = "1" // ocupar
            count++
        } 
    }
    return count
}
console.log(maxUrinalesLibres("10001")); // 1
console.log(maxUrinalesLibres("1001"));  // 0
console.log(maxUrinalesLibres("00000")); // 3
console.log(maxUrinalesLibres("000"));   // 2
console.log(maxUrinalesLibres("01000")); // 1
console.log(maxUrinalesLibres("011"));   // -1
