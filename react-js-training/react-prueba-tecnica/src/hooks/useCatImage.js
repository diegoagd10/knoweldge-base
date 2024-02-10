import { useState, useEffect } from 'react'

const CAT_IMAGE_URL = 'https://cataas.com/cat/says/'

// Custom Hook
// El hook debe empezar con el prefijo 'use' para que React lo reconozca como un hook
export function useCatImage ({ fact }) {
  // El custom hook puede tener su propio estado
  const [imageUrl, setImageUrl] = useState()

  // El custom hook puede tener su propio efecto
  useEffect(() => {
    if (!fact) return

    const catMessage = fact.split(' ')[0]
    const url = `${CAT_IMAGE_URL}${catMessage}?fontSize=50&fontColor=white`
    setImageUrl(url)
  }, [fact])

  return { imageUrl }
}
