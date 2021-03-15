import { MovieCard } from './MovieCard';
import { Header } from './Header';

import { GenreResponseProps, MovieProps } from '../App';

import '../styles/content.scss';

interface ContentProps {
  movies: MovieProps[];
  genre: GenreResponseProps;
}

export function Content({ genre, movies }: ContentProps) {
  return (
    <div className="container">
      <Header genre={genre} />

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
