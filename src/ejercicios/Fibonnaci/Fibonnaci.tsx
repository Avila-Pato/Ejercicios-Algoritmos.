
/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */


const Fibonnaci = ( ) => {
  
    const fibonacci = (n: number): number => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };


  const numbers = Array.from({ length: 10 }, (_, i) => fibonacci(i));

  
  console.log(numbers);
  
  

//   const Finonnaci2 = (n2: number): number => {
//     // Evita un buble
//     if(n2 <= 1)  return n2
//     // suma los 2 numeros anteriores (Recursividad)
//     return Finonnaci2(n2 - 1) + Finonnaci2(n2 - 2)
// }  

// const numbers2 = Array.from({ length: 20 }, (_, i) => Finonnaci2(i))
// console.log(numbers2)



  return (
    <div>Fibonnaci</div>
  )
}

export default Fibonnaci