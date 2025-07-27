import { create } from 'zustand';

const useMovieStore = create((set) => ({
  movies: [],
  loading: false,
  error: '',
  searchTerm: '',
  setMovies: (movies) => set({ movies }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setSearchTerm: (term) => set({ searchTerm: term }),
}));

export default useMovieStore;
