import { useState, useEffect } from 'react'
import { fetchCategories } from '../services/products'

export function useCategories () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCategories(fetchCategories().sort((a, b) => a.name.localeCompare(b.name)))
  }, [])

  return { categories }
}
