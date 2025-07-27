// src/App.jsx
import SearchBar from './components/SearchBar';
import MovieGrid from './components/MovieGrid';
import './App.css';

const App = () => (
  <div className="App">
    <h1>🎬 Movie Search App</h1>
    <SearchBar />
    <MovieGrid />
  </div>
);

export default App;
