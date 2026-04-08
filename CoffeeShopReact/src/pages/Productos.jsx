import { useState } from 'react'
import { useCoffee } from '../hooks/useCoffee'
import ProductCard from '../components/ProductCard'
import CartModal from '../components/CartModal'

export default function Productos() {
  const { coffees, loading, error } = useCoffee()
  const [selectedCoffee, setSelectedCoffee] = useState(null)

  const handleAddToCart = (coffee) => setSelectedCoffee(coffee)
  const handleCloseModal = () => setSelectedCoffee(null)

  if (loading) {
    return (
      <div className="container text-center my-5">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">Cargando cafés...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger text-center" role="alert">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          {error}
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="container my-5">
        <h2 className="text-center mb-4">Nuestros Cafés</h2>

        <div className="row g-4">
          {coffees.map((coffee, index) => (
            <ProductCard
              key={coffee.id ?? index}
              coffee={coffee}
              index={index}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>

      <hr className="border-2 opacity-100" />

      {/* ACORDEON - Detalle de productos desde la API */}
      <section className="container my-5">
        <h3 className="text-center mb-3">Detalle de productos</h3>

        <div className="accordion" id="accordionCafe">
          {coffees.map((coffee, index) => (
            <div className="accordion-item" key={coffee.id ?? index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button${index !== 0 ? ' collapsed' : ''}`}
                  data-bs-toggle="collapse"
                  data-bs-target={`#cafe-${index}`}
                >
                  {coffee.title}
                </button>
              </h2>
              <div
                id={`cafe-${index}`}
                className={`accordion-collapse collapse${index === 0 ? ' show' : ''}`}
                data-bs-parent="#accordionCafe"
              >
                <div className="accordion-body">
                  <p>{coffee.description}</p>
                  {coffee.ingredients && coffee.ingredients.length > 0 && (
                    <>
                      <strong>Ingredientes:</strong>
                      <ul className="mt-1 mb-0">
                        {coffee.ingredients.map((ing, i) => (
                          <li key={i}>{ing}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedCoffee && (
        <CartModal selectedCoffee={selectedCoffee} onClose={handleCloseModal} />
      )}
    </>
  )
}
