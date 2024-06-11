import { useState, useEffect } from 'react';
import styles from './MovieList.module.css';
import SkeletonMovieItem from '../MovieItem/SkeletonMovieItem';

const SkeletonMovieList = () => {
  const [items, setItems] = useState<number>(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItems(8);
      } else if (window.innerWidth >= 768) {
        setItems(6);
      } else {
        setItems(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skeletonItems = new Array(items).fill(0);

  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {skeletonItems.map((_, index) => (
          <SkeletonMovieItem key={index} />
        ))}
      </ul>
    </div>
  );
};

export default SkeletonMovieList;
