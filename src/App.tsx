import './App.css'
import contandoPalabras from './ejercicios/ContandoPalabras/contandoPlabras'
// import { GetAspectRatio } from './ejercicios/AspectRatioImagen/AspectRatio'
// import Area from './ejercicios/AreaDeUnPoligono/Area'
// import NumerpPrimo from './ejercicios/NumeroPrimo/NumerpPrimo'
// import Fibonnaci from './ejercicios/Fibonnaci/Fibonnaci'
// import Anagrama from './ejercicios/Anagrama/Anagrama'
// import FizzBuzz from './ejercicios/FizzBuzz/FizzBuzz'


function App() {
  const resultado = contandoPalabras("hola que que tal, tal que mi nombre es Jhon Doe, estoy aqui, aqui estoy en una charla informativa")

  return (
    <>
      <div>
        <h1>Contador de Palabras</h1>
        <pre>{JSON.stringify(resultado, null, 2)}</pre>

        {/* <FizzBuzz /> */}
          {/* <Anagrama /> */}
          {/* <Fibonnaci /> */}
          {/* <NumerpPrimo /> */}
        {/* <Area /> */}
        {/* <GetAspectRatio /> */}

      </div>
    </>
  )
}

export default App
