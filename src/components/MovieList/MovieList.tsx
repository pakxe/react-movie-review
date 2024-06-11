import { Movie } from '../../types/movie';
import MovieItem from '../MovieItem/MovieItem';
import Text from '../Text/Text';
import styles from './MovieList.module.css';

export default function MovieList({ movieList }: { movieList: Movie[] }) {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {movieList.length === 0 ? (
          <Text style={{ color: 'white' }}>목록이 비어있습니다.</Text>
        ) : (
          <>
            {movieList.map((product) => (
              <MovieItem {...product} key={product.id} />
            ))}
          </>
        )}
      </ul>
    </div>
  );
}
