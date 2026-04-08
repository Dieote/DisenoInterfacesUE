import { useNavigate } from 'react-router-dom'

export default function CartModal({ selectedCoffee, onClose }) {
  const navigate = useNavigate()

  const goToCheckout = () => {
    onClose()
    navigate('/contacto')
  }

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Producto agregado</h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body text-center">
              <p className="fs-4">🛒</p>
              {selectedCoffee && (
                <p className="fw-bold">{selectedCoffee.title}</p>
              )}
              <p className="mt-2">¿Deseás continuar con la compra?</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Seguir comprando
              </button>
              <button className="btn btn-primary" onClick={goToCheckout}>
                Ir al checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </>
  )
}
