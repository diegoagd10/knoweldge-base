import { useState, useCallback } from 'react'
import { Movies } from './components/Movies'
import { useQuery } from './hooks/useQuery'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'

export function App () {
  const [sort, setSort] = useState(false)
  const { query, error, updateQuery } = useQuery()
  const { movies, loading, getMovies } = useMovies({ query, sort })

  const debouncedGetMovies = useCallback(
    debounce(query => {
      getMovies({ query })
    }, 300)
    , [])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (error) return

    getMovies({ query })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateQuery(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='main-container'>
      <header>
        <h1>Movies</h1>
        <form onSubmit={handleSubmit} className='search-form'>
          <input onChange={handleChange} value={query} name='query' placeholder='Movie to search...' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Search</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>

      <main>
        {loading
          ? <p className='loading'>Loading...</p>
          : <Movies movies={movies} />}
      </main>
    </div>
  )
}
