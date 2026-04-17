// ProductCard muestra la info de UN producto de la tienda
// trae: producto (objeto con nombre, descripcion, precio, origen, tipo, tostado)
//         onEncargar
export default function ProductCard({ producto, onEncargar }) {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card h-100 shadow-sm">

        {/* Todos los productos usan la misma imagen */}
        <img
          src="/img/bolsa-cafe.jpg"
          className="card-img-top"
          alt={producto.nombre}
          style={{ height: '180px', objectFit: 'cover' }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text text-muted small">{producto.descripcion}</p>

          <ul className="list-unstyled small mt-2 mb-3">
            <li><strong>Origen:</strong> {producto.origen}</li>
            <li><strong>Tipo:</strong> {producto.tipo}</li>
            <li><strong>Tostado:</strong> {producto.tostado}</li>
          </ul>

          <p className="fw-bold fs-5 mt-auto mb-2">€{producto.precio.toFixed(2)}</p>

          <button
            className="btn btn-success"
            onClick={() => onEncargar(producto)}
          >
            <i className="bi bi-bag-plus me-2"></i>
            Encargar
          </button>
        </div>

      </div>
    </div>
  )
}
