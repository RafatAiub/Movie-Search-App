// src/components/MovieGrid.jsx
import useMovieStore from '../store/useMovieStore';
import MovieCard from './MovieCard';

const MovieGrid = () => {
  const { movies, loading, error, searchTerm } = useMovieStore();

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!movies.length && searchTerm) return <p>No results found.</p>;

  return (
    <div>
      {searchTerm && <h2>Results for: <em>{searchTerm}</em></h2>}
      <div className="movie-grid">
        {movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieGrid;
