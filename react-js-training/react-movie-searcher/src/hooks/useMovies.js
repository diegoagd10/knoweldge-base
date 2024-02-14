import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ query, sort }) {
  const [error, setError] = useState()
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previousQuery = useRef(query)

  const getMovies = useCallback(({ query }) => {
    if (query === previousQuery.current) return

    setError(null)
    setLoading(true)

    searchMovies({ query })
      .then(movie => {
        setMovies(movie)
        previousQuery.current = query
      })
      .catch((e) => setError(e.message))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, loading, error, getMovies }
}
