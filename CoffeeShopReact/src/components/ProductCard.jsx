const PRICES = [9.99, 7.99, 8.49, 5.99, 6.49, 10.99, 7.49, 9.49]

export default function ProductCard({ coffee, index, onAddToCart }) {
  const price = PRICES[index % PRICES.length]

  return (
    <div className="col-md-3 col-sm-6">
      <div className="card h-100 shadow-sm">
        <img
          src="/img/bolsa-cafe.jpg"
          className="card-img-top"
          alt={coffee.title}
          style={{ height: '180px', objectFit: 'cover' }}
        />
        <div className="card-body text-center d-flex flex-column">
          <h5 className="card-title">{coffee.title}</h5>
          <p className="card-text text-muted small flex-grow-1">{coffee.description}</p>
          <p className="fw-bold fs-5 mt-2">€{price.toFixed(2)}</p>
          <button
            className="btn btn-success mt-auto"
            onClick={() => onAddToCart(coffee)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}
