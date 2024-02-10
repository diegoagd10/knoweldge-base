import { useState, useEffect } from 'react'

// Custom Hook
// El hook debe empezar con el prefijo 'use' para que React lo reconozca como un hook
export function useFetchCatMessage ({ fact }) {
  // El custom hook puede tener su propio estado
  const [message, setMessage] = useState(null)

  // El custom hook puede tener su propio efecto
  useEffect(() => {
    if (!fact) return

    const catMessage = fact.split(' ')[0]
    setMessage(catMessage)
  }, [fact])

  return { message }
}
