// src/App.jsx
import SearchBar from './components/SearchBar';
import MovieGrid from './components/MovieGrid';
import './App.css';

const App = () => (
  <div className="App">
    <h1>🎬 Movie Search App</h1>
    <SearchBar /> // Search bar for user input
    <MovieGrid /> // Grid to display movie results
  </div>
);

export default App;
