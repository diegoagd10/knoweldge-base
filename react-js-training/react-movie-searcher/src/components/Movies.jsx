function MovieItem ({ movie }) {
  return (
    <article className='movie'>
      <img src={movie.poster} alt='Movie Poster' />
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
    </article>
  )
}

function ListOfMovies ({ movies }) {
  return (
    <section className='movies-container'>
      {movies.map((movie) => {
        return (
          <MovieItem key={movie.id} movie={movie} />
        )
      })}
    </section>
  )
}

function NoMoviesResults () {
  return <p>Movies not found</p>
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return hasMovies
    ? <ListOfMovies movies={movies} />
    : <NoMoviesResults />
}
