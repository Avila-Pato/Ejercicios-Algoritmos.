// Ordenar emociones
// Tendrás una función llamada "ordenarEmociones" que devolverá un arreglo de emociones ordenadas. Tiene dos parámetros, el primer
//  parámetro llamado "emociones" esperará un arreglo de emociones donde una emoción será una de las siguientes:

// ":D" -> Súper Feliz
// ":)" -> Feliz
// ":|" -> Normal
// ":(" -> Triste
// "T_T" -> Súper Triste

// Y el segundo parámetro se llama orden, si este parámetro es true, entonces el orden de las emociones será descendente (de Súper Feliz a Súper Triste),
//  si es false, entonces será ascendente (de Súper Triste a Súper Feliz)

// Ejemplo si el orden es true con el arreglo anterior:

// [":D", ":)", ":|", ":(", "T_T"]; // => Súper Feliz -> Feliz -> Normal -> Triste -> Súper Triste
// Si orden es false:

// ["T_T", ":(", ":|", ":)", ":D"]; // => Súper Triste -> Triste -> Normal -> Feliz -> Súper Feliz
// Ejemplo:

// arr = [":D", ":|", ":)", ":(", ":D"];
// ordenarEmociones(arr, true); // [ ":D", ":D", ":)", ":|", ":(" ]
// ordenarEmociones(arr, false); // [ ":(", ":|", ":)", ":D", ":D" ]
// Notas
// El arreglo podría estar vacío, en ese caso devuelve el mismo arreglo vacío ¯*( ツ )*/¯
// Todas las emociones serán válidas

// indexOf devuelve el indice de un elemento en un array si no lo encuentra devuelve -1
function ordenarEmociones( emociones: string[], orden: boolean) {
    const emotions = [":D", ":)", ":|", ":(", "T_T"];

    if( orden ){
        return emociones.sort((a,b) => emotions.indexOf(b) - emotions.indexOf(a))
    }else{
        return emociones.sort((a,b) => emotions.indexOf(a) - emotions.indexOf(b))
    }

}

console.log(ordenarEmociones(["T_T", ":(", ":|", ":)", ":D"], true))

console.log(ordenarEmociones(["T_T", ":(", ":|", ":)", ":D"], false))