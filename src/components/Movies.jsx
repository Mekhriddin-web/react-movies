import { useEffect, useState } from 'react';
import Movie from './Movie';

const Movies = ({ movies, search, category }) => {
  const [films, setFilms] = useState(movies);
  useEffect(() => {
    const res = movies.filter(
      m =>
        m.title.toLowerCase().startsWith(search.toLowerCase()) &&
        (m.genres.includes(category) || category === 'All')
    );
    search === '' && category === 'All' ? setFilms(movies) : setFilms(res);
  }, [movies, setFilms, search, category]);

  return (
    <div className="movies">
      {films.length ? (
        films.map(movie => (
          <Movie
            key={movie.id}
            title={movie.title}
            img={movie.large_cover_image}
            year={movie.year}
          />
        ))
      ) : (
        <h2>Ничего не найдено по запросу "{search}"</h2>
      )}
    </div>
  );
};

export default Movies;
