//  * Enunciado: Crea un programa que se encargue de calcular el aspect ratio de una imagen a partir de una url.
//  * - Nota: Esta prueba no se puede resolver con el playground online de Kotlin. Se necesita Android Studio.
//  * - Url de ejemplo: https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png
//  * - Por ratio hacemos referencia por ejemplo a los "16:9" de una imagen de 1920*1080px.

import { useEffect, useState } from "react"

type AspectRatioResult = {
  width: number
  height: number
  ratio: string
  decimal: number
}

const getAspectRatioFromUrl = (url: string): Promise<AspectRatioResult> => {
  return new Promise((resolve, reject) => {
    const img = new Image()

    img.onload = () => {
      const gcd = (a: number, b: number): number =>
        b === 0 ? a : gcd(b, a % b)

      const divisor = gcd(img.width, img.height)

      resolve({
        width: img.width,
        height: img.height,
        ratio: `${img.width / divisor}:${img.height / divisor}`,
        decimal: Number((img.width / img.height).toFixed(2))
      })
    }

    img.onerror = () => reject("Error cargando imagen")

    img.src = url
  })
}

export function GetAspectRatio() {
  const [data, setData] = useState<AspectRatioResult | null>(null)

  useEffect(() => {
    getAspectRatioFromUrl(
      "https://cdn.pixabay.com/photo/2025/11/04/07/47/winter-woods-9935921_960_720.jpg"
    ).then(setData)
  }, [])

  if (!data) return <p>Cargando...</p>

  return (
    <div>
      <p>Width: {data.width}</p>
      <p>Height: {data.height}</p>
      <p>Ratio: {data.ratio}</p>
      <p>Decimal: {data.decimal}</p>
    </div>
  )
}
