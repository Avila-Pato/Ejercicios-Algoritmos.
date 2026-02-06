/*
* -contador palbras repetidas


 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */


const variableText = "hola que tal, tal que mi nombre es Jhon Doe, estoy aqui, aqui estoy en una charla informativa"

const normalizeText = (msg: string) => {
  return msg
    .toLowerCase()
    .replace(/[.!,?;:]/g , "")
    .trim()
}

const contandoPalabras = (text: string): Record<string, number> => {
    const dictionary: Record<string, number> = {}
    const separatedWords = text.split(" ")
    for (const word of separatedWords) {
        const normalizedWord = normalizeText(word)
        if (normalizedWord) {
            if (normalizedWord in dictionary) {
                dictionary[normalizedWord] += 1
            } else {
                dictionary[normalizedWord] = 1
            }
        }
    }
    return dictionary
}

const resultado = contandoPalabras(variableText)
console.log(resultado)

export default contandoPalabras