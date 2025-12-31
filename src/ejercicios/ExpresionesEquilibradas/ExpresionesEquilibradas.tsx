/*
 * Reto #10
 * EXPRESIONES EQUILIBRADAS
 * Fecha publicación enunciado: 07/03/22
 * Fecha publicación resolución: 14/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }

 */

import { useState } from "react";

function isBalanced(expression: string) {
  const symbols = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stack: string[] = [];

  for (const char of expression) {
    if (symbols[char as keyof object]) {
      stack.push(char);
    //   Si el char es unode los objetos symbols
    // Este bloque solo se ejecuta cuando el símbolo CIERRA
    } else if (Object.values(symbols).includes(char)) {

        // intentando cerrar si nada esta abierto  stack.length === 0
        // stack.pop() → saco el último símbolo abierto
        // symbols[eseSimbolo] → veo cuál debería ser su cierre
        // comparo con char

      if (stack.length === 0 || char !== symbols[stack.pop() as keyof object]) {
        return false;
      }
    }
  }

  return stack;
}

function Expresiones() {
  const [value, setValue] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h1>Expresiones Equilibradas</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <p>Resultado</p>
      {value && (isBalanced(value) ? "Esta balanceado" : "No balanceado")}
    </div>
  );
}
export default Expresiones;
