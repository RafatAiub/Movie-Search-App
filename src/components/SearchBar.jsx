// src/components/SearchBar.jsx
import { useState } from "react";
import useMovieStore from "../store/useMovieStore";

const SearchBar = () => {
  const API_KEY = "e262dfea"; // this is the OMDB Key
  const [input, setInput] = useState("");
  const { setMovies, setLoading, setError, setSearchTerm } = useMovieStore(); // from zustand call this hook

  const fetchMovies = async () => {
    if (!input.trim()) return; // check if input is empty or just spaces

    setLoading(true);
    setError("");
    setSearchTerm(input);

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${input}`  // fetch movies from OMDB API
      );
      const data = await res.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError("Failed to fetch movies.");
      setMovies([]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e) => e.key === "Enter" && fetchMovies(); // allows the user to press Enter to search

  return (
    <div className="search-bar">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search movies..."
      />
      <button onClick={fetchMovies}>Search</button>
      <button
        onClick={() => {
          setInput("");
          setMovies([]);
          setSearchTerm("");
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default SearchBar;
