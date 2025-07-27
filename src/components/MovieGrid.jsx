// src/components/MovieGrid.jsx
import useMovieStore from '../store/useMovieStore';
import MovieCard from './MovieCard';

const MovieGrid = () => {
  const { movies, loading, error, searchTerm } = useMovieStore(); // Assuming useMovieStore is a custom hook that manages movie state

  // If loading, show a loading message; if there's an error, show the error message

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!movies.length && searchTerm) return <p>No results found.</p>; // If no movies found after search

  // Render the movie grid

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
