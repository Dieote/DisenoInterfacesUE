import { useState } from 'react'

export default function RecipeCard({ recipe }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="col-md-4 col-sm-6">
      <div
        className="card border-0 shadow-sm"
        style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease', cursor: 'default' }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-5px)'
          e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.13)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = ''
        }}
      >
        <img
          src={recipe.image}
          className="card-img-top"
          alt={recipe.title}
          style={{ height: '200px', objectFit: 'cover' }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-semibold mb-2">{recipe.title}</h5>

          <p
            className="card-text text-muted small"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {recipe.description}
          </p>

          {/* Ingredientes desplegables al fondo */}
          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <div className="mt-auto pt-2">
              <button
                className="btn btn-outline-secondary btn-sm w-100"
                onClick={() => setOpen(!open)}
              >
                <i className={`bi bi-chevron-${open ? 'up' : 'down'} me-1`} />
                {open ? 'Ocultar ingredientes' : `Ver ingredientes (${recipe.ingredients.length})`}
              </button>

              {open && (
                <ul className="mt-2 mb-0 small ps-3 text-muted">
                  {recipe.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
