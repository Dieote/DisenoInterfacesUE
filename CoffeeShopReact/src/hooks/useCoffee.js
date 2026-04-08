import { useState, useEffect } from 'react'

export function useCoffee() {
  const [coffees, setCoffees] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://sampleapis.com/coffee/hot')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar los cafés')
        return res.json()
      })
      .then(data => {
        setCoffees(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { coffees, loading, error }
}
