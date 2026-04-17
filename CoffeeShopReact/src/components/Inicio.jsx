import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <section className="container text-center my-5">
      <h1 className="mb-3">Bienvenido a Café Aroma</h1>
      <p className="lead">
        Descubrí nuestros granos seleccionados y disfrutá una experiencia única en cada taza.
      </p>

      {/* Dos botones: uno para el catálogo de recetas (API) y otro para la tienda (fake) */}
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/recetas" className="btn btn-outline-dark btn-lg">
          <i className="bi bi-journal-text me-2"></i>
          Ver recetas
        </Link>
        <Link to="/productos" className="btn btn-primary btn-lg">
          <i className="bi bi-shop me-2"></i>
          Ver productos
        </Link>
      </div>
    </section>
  )
}
