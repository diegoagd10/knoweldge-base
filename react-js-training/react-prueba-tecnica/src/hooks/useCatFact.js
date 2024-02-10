import { useState, useEffect } from 'react'
import { fetchRandomCatFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshRandomCatFact = () => {
    fetchRandomCatFact().then(setFact)
  }

  useEffect(refreshRandomCatFact, [])

  return { fact, refreshRandomCatFact }
}
