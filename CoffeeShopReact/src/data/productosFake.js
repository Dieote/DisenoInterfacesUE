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
  {
    id: 5,
    nombre: 'Guatemala Claro',
    descripcion: 'Ligero con aromas florales y acidez muy suave.',
    precio: 8.49,
    origen: 'Guatemala',
    tipo: 'Arabica',
    tostado: 'Suave',
  },
  {
    id: 6,
    nombre: 'Kenya Rojo',
    descripcion: 'Acidez brillante con sabores a fruta roja madura.',
    precio: 12.99,
    origen: 'Kenya',
    tipo: 'Arabica',
    tostado: 'Medio',
  },
  {
    id: 7,
    nombre: 'Indonesia Oscuro',
    descripcion: 'Terroso y profundo, con un cuerpo muy denso.',
    precio: 10.49,
    origen: 'Indonesia',
    tipo: 'Robusta',
    tostado: 'Fuerte',
  },
  {
    id: 8,
    nombre: 'Perú Orgánico',
    descripcion: 'Certificado orgánico, notas a nuez y vainilla natural.',
    precio: 13.99,
    origen: 'Perú',
    tipo: 'Arabica',
    tostado: 'Medio',
  },
  {
    id: 9,
    nombre: 'Honduras Miel',
    descripcion: 'Proceso honey que le da dulzura natural y buen cuerpo.',
    precio: 9.49,
    origen: 'Honduras',
    tipo: 'Arabica',
    tostado: 'Suave',
  },
  {
    id: 10,
    nombre: 'Uganda Fuerte',
    descripcion: 'Potente y con mucha cafeína, para los que necesitan energía.',
    precio: 7.49,
    origen: 'Uganda',
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
