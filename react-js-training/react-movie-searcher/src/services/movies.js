const API_KEY = '97153c42'

function mapMovies (movies) {
  return movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
}

export function searchMovies ({ query }) {
  if (query === null) return null

  return fetch(`https://www.omdbapi.com/?s=${query}&page=1&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(({ Search }) => Search)
    .then(mapMovies)
    .catch((e) => new Error('Error searching movies'))
}
