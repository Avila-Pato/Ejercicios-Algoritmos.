import React from 'react'

const TriangleArea = (base: number, height: number): number => {
    return (base * height) / 2
}

TriangleArea(5, 10)
console.log("Area del triángulo:", TriangleArea(5, 10))


const RectengleArea = (width: number, length: number): number => {
    return width * length
}
RectengleArea(5, 10)
console.log("Area del rectángulo:", RectengleArea(5, 7))


const Square = (side: number): number => {
  return side * side
}
const area = Square(2)
console.log("El area de un circulo es " + area)



const Area = () => {
  return (
    <div>Area</div>
  )
}

export default Area