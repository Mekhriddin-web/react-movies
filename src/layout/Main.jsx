import { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json`)
      .then(response => response.json())
      .then(data => setMovies(data.data.movies));
  }, [setMovies]);

  return (
    <main className="content container">
      <Search search={search} setSearch={setSearch} setCategory={setCategory} />
      {movies.length ? (
        <Movies movies={movies} search={search} category={category} />
      ) : (
        <Preloader />
      )}
    </main>
  );
};

export default Main;
