import { useState } from 'react'
import CodeMorse from './CodeMorse'
import './CodeMorse.css'

export default function CodeMorseComponent() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleConvert = (value: string) => {
    setInput(value)
    if (value.trim()) {
      const resultado = CodeMorse(value)
      setOutput(resultado)
    } else {
      setOutput('')
    }
  }

  const handleClear = () => {
    setInput('')
    setOutput('')
  }

  return (
    <div className="morse-container">
      <h1>Conversor de Código Morse</h1>

      <div className="morse-content">
        <div className="morse-input-section">
          <label htmlFor="morse-input">Ingresa texto o morse:</label>
          <textarea
            id="morse-input"
            value={input}
            onChange={(e) => handleConvert(e.target.value)}
            placeholder="Escribe aquí... (ej: 'hola mundo' o '.... --- .-.. .-')"
          />
        </div>

        <div className="morse-output-section">
          <label htmlFor="morse-output">Resultado:</label>
          <textarea
            id="morse-output"
            value={output}
            readOnly
            placeholder="El resultado aparecerá aquí"
          />
        </div>
      </div>

      <button onClick={handleClear} className="clear-btn">
        Limpiar
      </button>

    </div>
  )
}
