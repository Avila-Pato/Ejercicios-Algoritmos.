// Carrito de compras
// Estamos implementando un carrito de compras para nuestra tienda virtual. 
// Dado un listado de productos con id, nombre y precio, 

// tenemos que implementar una función que reciba: un producto, una cantidad (positiva o negativa) y opcionalmente un carrito base y devuelva un nuevo carrito. 

// Si la cantidad es 0, debemos eliminar el producto del carrito, el formato del carrito debe ser el siguiente:

interface Producto {
  id: string;
  nombre: string;
  precio: number;
}

type Item = {
  cantidad: number;
  producto: Producto;
}

type Carrito = [Producto['id'], Item][]

function manejarCarrito(producto: Producto, cantidad: number, carrito: Carrito = []): Carrito {

  // Basicamente, si la cantidad es 0, debemos eliminar el producto del carrito
    if(cantidad === 0) {
      return carrito.filter(item => item[0] !== producto.id)
    }

    // Si la cantidad es positiva, debemos agregar el producto al carrito
   if (cantidad > 0) {
  return [
    ...carrito,
    [producto.id,  {cantidad,producto }]
  ]
}



    // Si la cantidad es negativa, debemos restar la cantidad al producto en el carrito
    if(cantidad < 0) {
      return carrito.map(item => {
        if(item[0] === producto.id) {
          return [item[0], {...item[1], cantidad: item[1].cantidad + cantidad}] as [Producto['id'], Item]
        }
        return item
      }).filter(item => item[1].cantidad >= 0)  // Si la cantidad es 0, debemos eliminar el producto del carrito
    }

    return carrito

  }


// Pruebas
let carrito: Carrito = []

carrito = manejarCarrito(
  { id: 'pizza', nombre: 'Pizza', precio: 100 },
  5,
  carrito
)

console.log(JSON.stringify(carrito, null, 2))
// [['pizza', { cantidad: 5, producto: {...} }]]

carrito = manejarCarrito(
  { id: 'pizza', nombre: 'Pizza', precio: 100 },
  -2,
  carrito
)
console.log(JSON.stringify(carrito, null, 2))
// [['pizza', { cantidad: 4, producto: {...} }]]

carrito = manejarCarrito(
  { id: 'pizza', nombre: 'Pizza', precio: 100 },
  0,
  carrito
)
console.log(JSON.stringify(carrito))


// Input
// let carrito = manejarCarrito({id: 'pizza', nombre: 'Pizza', precio: 100}, 5)

// Output
// [
//   ['pizza', {
//     cantidad: 5,
//     producto: {
//       id: 'pizza',
//       nombre: 'Pizza',
//       precio: 100
//     }
//   }]
// ]


// Input
// carrito = manejarCarrito({id: 'pizza', nombre: 'Pizza', precio: 100}, -3, carrito)

// Output
// [
//   ['pizza', {
//     cantidad: 2,
//     producto: {
//       id: 'pizza',
//       nombre: 'Pizza',
//       precio: 100
//     }
//   }]
// ]


// Input
// carrito = manejarCarrito({id: 'pizza', nombre: 'Pizza', precio: 100}, -2, carrito)

// Output
// []