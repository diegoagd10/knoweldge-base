import { useState, createContext } from 'react'

// Se puede usar para definr Themas, Configuration, etc.
// Mas sin embargo, no es muy comun usarlo para crear un estado global
// Tambien para estados sencillos y que no cambian tan frequente

// 1. Create the Context
// Este es el que debemos de consumir
export const FiltersContext = createContext()

// 2. create the Provider to provide the context
// Este es el que nos provee el contexto
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
