import { useState, useEffect } from 'react'
import { fetchProducts } from '../services/products'

export function useProducts () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(fetchProducts())
  }, [])

  return { products }
}
