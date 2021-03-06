import { GenreResponseProps } from '../App';

interface HeaderProps {
  genre: GenreResponseProps;
}

export function Header({ genre }: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {genre.title}</span>
      </span>
    </header>
  );
}