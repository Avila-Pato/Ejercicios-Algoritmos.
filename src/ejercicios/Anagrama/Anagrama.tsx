import React from "react";

/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const Anagrama = () => {
  const isAnAgrama = (first: string, second: string) => {
    const a = first.toLowerCase().toLocaleUpperCase()
    const b = second.toLowerCase().toLocaleUpperCase()

    if(a.length != b.length) return false
    if(a === b) return false

    return a.split("").sort().join("") === b.split("").sort().join("");
  };

  console.log(isAnAgrama("roma", "amor")); // true
  console.log(isAnAgrama("roma", "roma")); // false

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Anagrama;
