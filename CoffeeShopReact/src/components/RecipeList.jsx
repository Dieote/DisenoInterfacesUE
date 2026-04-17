import RecipeCard from './RecipeCard'

// RecipeList recibe array de recetas y las pinta en un grid
// Cada receta se muestra como una RecipeCard
export default function RecipeList({ recipes }) {
  return (
    <div className="row g-4">
      {recipes.map((recipe, index) => (
        // Usamos recipe.id si existe, si no usamos el indice como key
        <RecipeCard key={recipe.id ?? index} recipe={recipe} />
      ))}
    </div>
  )
}
