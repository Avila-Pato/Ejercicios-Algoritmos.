//  * Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
//  * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
//  * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
//  * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
//  *

const morseAlphabet = {
     '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
}

// Crear inverso del diccionario (texto → morse)
const textToMorse = Object.entries(morseAlphabet).reduce((acc, [morse, char]) => {
  acc[char] = morse;
  return acc;
}, {} as Record<string, string>);

// Detectar si es morse o texto
const isMorse = (input: string): boolean => {
  return /^[\s.-]+$/.test(input);
}

// Convertir morse a texto
const morseToText = (morse: string): string => {
  return morse
    .split('   ') // Separador de palabras
    .map(word =>
      word
        .split(' ') // Separador de letras
        .map(code => morseAlphabet[code as keyof typeof morseAlphabet] || '?')
        .join('')
    )
    .join(' ');
}

// Convertir texto a morse
const textToMorseConvert = (text: string): string => {
  return text
    .toLowerCase()
    .split(' ') // Separador de palabras
    .map(word =>
      word
        .split('') // Cada letra
        .map(char => textToMorse[char] || '?')
        .join(' ') // Separador entre letras
    )
    .join('   '); // Separador entre palabras
}

// Función principal: auto-detecta y convierte
const CodeMorse = (input: string): string => {
  const trimmedInput = input.trim();

  if (isMorse(trimmedInput)) {
    return morseToText(trimmedInput);
  } else {
    return textToMorseConvert(trimmedInput);
  }
}

export default CodeMorse