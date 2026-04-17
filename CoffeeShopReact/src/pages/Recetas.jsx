import { useCoffee } from '../hooks/useCoffee'
import RecipeList from '../components/RecipeList'

// Página Recetas: usa el /hook que ya teníamos para traer datos de la API
export default function Recetas() {
  const { coffees, loading, error } = useCoffee()

  // Mientras esperamos la respuesta de la API
  if (loading) {
    return (
      <div className="container text-center my-5">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">Cargando recetas...</p>
      </div>
    )
  }

  // la API devuelve un error
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

  // Si fue bien, mostramos el catálogo
  return (
    <section className="container my-5">
      <h2 className="text-center mb-2">Recetas de Café</h2>
      <p className="text-center text-muted mb-4">
        Preparaciones especiales de todo el mundo
      </p>

      <RecipeList recipes={coffees} />
    </section>
  )
}
