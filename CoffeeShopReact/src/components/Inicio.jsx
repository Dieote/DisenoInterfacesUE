import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <section className="container text-center my-5">
      <h1 className="mb-3">Bienvenido a Café Aroma ☕</h1>
      <p className="lead">
        Descubrí nuestros granos seleccionados y disfrutá una experiencia única en cada taza.
      </p>
      <Link to="/productos" className="btn btn-primary btn-lg mt-3">
        Ver productos
      </Link>
    </section>
  )
}
