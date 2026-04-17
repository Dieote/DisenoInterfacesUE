import { useState, useEffect } from 'react'

// Convierte un objeto drink de TheCocktailDB al formato que usa RecipeCard
function mapDrink(drink) {
  const ingredients = []
  for (let i = 1; i <= 15; i++) {
    const ing = drink[`strIngredient${i}`]
    const measure = drink[`strMeasure${i}`]
    if (ing && ing.trim()) {
      ingredients.push(measure ? `${measure.trim()} ${ing.trim()}` : ing.trim())
    }
  }
  return {
    id: drink.idDrink,
    title: drink.strDrink,
    description: drink.strInstructions,
    image: drink.strDrinkThumb,
    ingredients,
  }
}

export function useCoffee() {
  const [coffees, setCoffees] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=coffee')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar las recetas')
        return res.json()
      })
      .then(data => {
        const drinks = data.drinks ?? []
        setCoffees(drinks.map(mapDrink))
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { coffees, loading, error }
}
