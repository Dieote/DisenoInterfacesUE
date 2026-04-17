import { createContext, useContext, useState } from 'react'

const TemaContext = createContext()

export function TemaProvider({ children }) {
  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    setDark(prev => {
      const next = !prev
      document.documentElement.setAttribute('data-bs-theme', next ? 'dark' : 'light')
      return next
    })
  }

  return (
    <TemaContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </TemaContext.Provider>
  )
}

export const useTema = () => useContext(TemaContext)
