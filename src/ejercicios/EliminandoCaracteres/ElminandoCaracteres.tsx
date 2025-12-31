import { useState } from "react"

/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */


function findNonCommon(str1: string, str2: string): string  {
let out = ""

for (const char of str1.toLowerCase()) {
    if(!str2.toLowerCase().includes(char)) {
        out += char
    }
}

return out
}

const ElminandoCaracteres = () => {
    const [str1, setStr1] = useState("")
    const [str2, setStr2] = useState("")

    const out1 = findNonCommon(str1, str2)
    const out2 = findNonCommon(str2, str1)


    return (
        <div>
            <h1>Eliminando caracteres</h1>
            <input type="text" value={str1} onChange={(e) => setStr1(e.target.value)} />
            <br />
            <br />
            <input type="text" value={str2} onChange={(e) => setStr2(e.target.value)} />

            <p>{out1}</p>
                <p>{out2}</p>
        </div>
    )
}
export default ElminandoCaracteres