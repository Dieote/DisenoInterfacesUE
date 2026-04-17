// Lista de 10 productos inventados
// Cada producto tiene: id, nombre, descripcion, precio, origen, tipo, tostado
const TODOS_LOS_PRODUCTOS = [
  {
    id: 1,
    nombre: 'Colombia Extra',
    descripcion: 'Café de montaña con notas a caramelo y chocolate negro.',
    precio: 9.99,
    origen: 'Colombia',
    tipo: 'Arabica',
    tostado: 'Medio',
  },
  {
    id: 2,
    nombre: 'Brasil Dulce',
    descripcion: 'Suave y cremoso, ideal para desayunos tranquilos.',
    precio: 7.99,
    origen: 'Brasil',
    tipo: 'Arabica',
    tostado: 'Suave',
  },
  {
    id: 3,
    nombre: 'Etiopía Salvaje',
    descripcion: 'Intenso y afrutado, con un toque cítrico inconfundible.',
    precio: 11.49,
    origen: 'Etiopía',
    tipo: 'Arabica',
    tostado: 'Fuerte',
  },
  {
    id: 4,
    nombre: 'Robusta Vietnam',
    descripcion: 'Muy fuerte y amargo, perfecto para espresso doble.',
    precio: 6.99,
    origen: 'Vietnam',
    tipo: 'Robusta',
    tostado: 'Fuerte',
  },
]

// Devuelve un num entero aleatorio entre min y max (ambos incluidos)
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Devuelve entre 4 y 10 productos aleatorio
export function generarProductos() {
  const cantidad = numeroAleatorio(4, 10)

  // Copiamos el array, lo mezclamos y tomamos los primeros `cantidad`
  return [...TODOS_LOS_PRODUCTOS]
    .sort(() => Math.random() - 0.5)
    .slice(0, cantidad)
}
