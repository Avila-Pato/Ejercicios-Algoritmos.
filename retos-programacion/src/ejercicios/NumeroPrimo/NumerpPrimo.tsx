/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */




const EsPrimo = () => {

    const  numero = 3
    // numeros menores a 1 no son primos
    if(numero < 1) return false

    for(let i =  2; i <= Math.sqrt(numero); i++ ) {
        if(numero % i === 0 ) {
            return false // no primos
        } 
    }
    return true   // primos
}
console.log(EsPrimo())
    
const listarPrimos = (limite: number) => {
  const primos: number[] = []

  for (let num = 2; num <= limite; num++) {
    if (EsPrimo()) {
      primos.push(num)
    }
  }

  return primos
}
console.log(listarPrimos(20))



const NumerpPrimo = () => {
  return (
    <div>NumerpPrimo</div>
  )
}

export default NumerpPrimo