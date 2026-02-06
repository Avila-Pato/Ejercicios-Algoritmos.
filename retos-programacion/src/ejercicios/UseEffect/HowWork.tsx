"use client"
import { useEffect, useState } from "react"

const MouseColor = () => {
    const [mostrar , setMostrar] = useState(true)

    // el estado como esta en true mostrara los colores del contenido del componente
    // al apretar el boton se cambiara el estado a false y el componente se ocultara
  return (
    <div>
        <button onClick={() => setMostrar(!mostrar)}>Mostrar button</button>
       <div>
          {mostrar && <MouseColorState />}

        </div>
    </div>
  )
}
  
  export default MouseColor
  
  function MouseColorState( ) {
    const [color, setColor] = useState('red')

    useEffect(() => {
        const handleMoveMouse = (e: MouseEvent) => {
                 if(e.clientX < window.innerWidth / 2) {
            setColor('red')
        }else {
            setColor('blue')
        }
        }
        window.addEventListener('mousemove', handleMoveMouse)

        return () => {
            window.removeEventListener('mousemove', handleMoveMouse)
        }
    }, [])
    return (
        <div>
            <p>El color es: {color}</p>
                <div style={{ width: "300px", height:"300px", backgroundColor: color}}></div>
        </div>
    )
}