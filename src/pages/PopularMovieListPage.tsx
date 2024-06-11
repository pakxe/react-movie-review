import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../constants/queryKeys';
import { requestPopularMovieList } from '../apis/requests/movie';
import { TIME } from '../constants/time';
import Text from '../components/Text/Text';
import InfiniteScrollContainer from '../components/InfiniteScrollContainer/InfiniteScrollContainer';
import MovieList from '../components/MovieList/MovieList';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import Header from '../components/Header/Header';
import SkeletonMovieList from '../components/MovieList/SkeletonMovieList';

const PopularMovieListPage = () => {
  const {
    data: movieList,
    isSuccess,
    ...rest
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.MOVIE.POPULAR],
    initialPageParam: 1,
    queryFn: ({ pageParam: page }) => requestPopularMovieList(page), // TODO: 오류 핸들링 필요
    select: (data) => {
      const popularMovieList = (data.pages ?? []).flatMap(({ results }) => results);

      return popularMovieList;
    },
    getNextPageParam: (lastPage) => (lastPage.hasNextPage ? lastPage.nextCursor : null),
    staleTime: TIME.HOUR,
    networkMode: 'always',
  });

  return (
    <>
      <Header />
      <Text style={{ color: 'white' }}>유명한 영화</Text>

      {isSuccess ? (
        <InfiniteScrollContainer {...rest} length={movieList.length} skeletonList={<SkeletonMovieList />}>
          <MovieList movieList={movieList} />
        </InfiniteScrollContainer>
      ) : (
        <SkeletonMovieList />
      )}
    </>
  );
};

export default PopularMovieListPage;
