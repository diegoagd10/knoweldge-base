import { useState, useEffect, useRef, useCallback } from 'react'

const validations = [
  { isInvalid: (q) => q === null, message: 'Please enter a movie to search' },
  { isInvalid: (q) => q?.trim().length === 0, message: 'Please enter a movie to search' },
  { isInvalid: (q) => q?.length < 3, message: 'Please enter at least 3 characters to search' },
  { isInvalid: (q) => q?.length > 50, message: 'Please enter less than 50 characters to search' },
  { isInvalid: (q) => q?.match(/[^a-zA-Z0-9\s]/), message: 'Please enter only letters and numbers' }
]

export function useQuery () {
  const [error, setError] = useState()
  const [query, setQuery] = useState('')
  const isInit = useRef(true)

  const updateQuery = useCallback((newQuery) => {
    setQuery(newQuery)
  }, [])

  useEffect(() => {
    if (isInit.current) {
      isInit.current = query.length === 0
      return
    }

    for (const { isInvalid, message } of validations) {
      if (isInvalid(query)) {
        setError(message)
        return
      }
    }

    setError(null)
  }, [query])

  return { query, error, updateQuery }
}
