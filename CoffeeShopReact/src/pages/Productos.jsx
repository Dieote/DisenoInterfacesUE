import { useState } from 'react'
import { generarProductos } from '../data/productosFake'
import ProductList from '../components/ProductList'

export default function Productos() {
  // useState con funcion de inicializacion: se ejecuta UNA sola vez al cargar
  // los productos no cambian si el componente se re-renderiza
  const [productos] = useState(() => generarProductos())
  const [carrito, setCarrito] = useState([])
  const [confirmado, setConfirmado] = useState(false)

  // cuando el usuario pulsa "Encargar" en una card
  const handleEncargar = (producto) => {
    // Comprobamos si ya está en el carrito para no duplicar
    const yaEsta = carrito.find(p => p.id === producto.id)
    if (!yaEsta) {
      setCarrito(prev => [...prev, producto])
    }
  }

  // Se llama cuando el usuario pulsa "Confirmar encargo
  const handleConfirmar = () => {
    // leemos los pedidos anteriores de localStorage (o array vacío si no hay)
    const pedidosAnteriores = JSON.parse(localStorage.getItem('pedidos') || '[]')
    // Creamos el nuevo pedid
    const nuevoPedido = {
      fecha: new Date().toLocaleString(),
      productos: carrito,
    }

    // Guardamos todos los pedidos (anteriores + el nuevo)
    localStorage.setItem('pedidos', JSON.stringify([...pedidosAnteriores, nuevoPedido]))
    // Vaciarel carrito y mostramos el mensaje
    setCarrito([])
    setConfirmado(true)
  }

  return (
    <section className="container my-5">
      <h2 className="text-center mb-2">Nuestra Tienda</h2>
      <p className="text-center text-muted mb-4">
        Seleccioná los cafés que quieras encargar
      </p>

      {/* se muestra al confirmar el encargo */}
      {confirmado && (
        <div className="alert alert-success alert-dismissible text-center" role="alert">
          <i className="bi bi-check-circle-fill me-2"></i>
          <strong>¡Encargo recibido!</strong> Nos comunicaremos contigo a la brevedad.
          <button
            type="button"
            className="btn-close"
            onClick={() => setConfirmado(false)}
          ></button>
        </div>
      )}

      {/*resumen del carrito — solo se muestra si hay productos encargados */}
      {carrito.length > 0 && (
        <div className="alert alert-info mb-4">
          <h5 className="mb-2">
            <i className="bi bi-bag me-2"></i>
            Productos seleccionados ({carrito.length})
          </h5>

          <ul className="mb-3">
            {carrito.map(p => (
              <li key={p.id}>
                {p.nombre} — <strong>€{p.precio.toFixed(2)}</strong>
              </li>
            ))}
          </ul>
          <p className="mb-3">
            <strong>Total: €{carrito.reduce((sum, p) => sum + p.precio, 0).toFixed(2)}</strong>
          </p>

          <button className="btn btn-primary" onClick={handleConfirmar}>
            <i className="bi bi-check-lg me-2"></i>
            Confirmar encargo
          </button>
        </div>
      )}

      {/* Grid de productos */}
      <ProductList productos={productos} onEncargar={handleEncargar} />
    </section>
  )
}
