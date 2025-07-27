// src/components/MovieCard.jsx
const MovieCard = ({ movie }) => {
  const placeholder = "https://via.placeholder.com/150x200?text=No+Image"; // Placeholder image URL

  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : placeholder} // Movie poster image
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
      <p>
        {movie.Year} • {movie.Type}
      </p>
    </div>
  );
};

export default MovieCard;
