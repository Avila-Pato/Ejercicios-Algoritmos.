// Letras por números
// Reemplazar las letras de un string por su index en el alfabeto (e.g. A = 1 , B = 2 , C = 3 ...)

// Consideraciones Adicionales:

// Ignorar espacios.
// Hacer clean up del string antes de comenzar el swap (para eliminar acentos y caracteres especiales, 
// se sugiere meter en este proceso de clean up el ignorado de espacios).

// func("abc def"); // returns '1 2 3 4 5 6';
const alfabetoNumerico = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6,
  G: 7, H: 8, I: 9, J: 10, K: 11, L: 12,
  M: 13, N: 14, O: 15, P: 16, Q: 17,
  R: 18, S: 19, T: 20, U: 21, V: 22,
  W: 23, X: 24, Y: 25, Z: 26
};


const NumeroPoralfabeto = (str: string)=> {
    const result: number[] = [];
    
    const cleanString = str
    .split('')
    .join('')
    .toUpperCase();

    for (let i = 0; i < cleanString.length; i++) {

      const letra = cleanString[i];
    //   valor = alfabetoNumerico[letra]; osea el valor de la letra
      const valor = alfabetoNumerico[letra as keyof typeof alfabetoNumerico];
      
      if(valor) {
        result.push(valor);
      }
    }
    return result
    
}
    
console.log(NumeroPoralfabeto("asdas"));