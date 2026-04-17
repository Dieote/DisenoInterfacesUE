import ProductCard from './ProductCard'

// ProductList recibe el array de productos y metodo encargar
// Delega a ProductCard el diseño de cada tarjeta
export default function ProductList({ productos, onEncargar }) {
  return (
    <div className="row g-4">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          producto={producto}
          onEncargar={onEncargar}
        />
      ))}
    </div>
  )
}
