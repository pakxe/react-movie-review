import { useInfiniteQuery } from '@tanstack/react-query';
import Header from '../components/Header/Header';
import Text from '../components/Text/Text';
import { QUERY_KEY } from '../constants/queryKeys';
import { TIME } from '../constants/time';
import InfiniteScrollContainer from '../components/InfiniteScrollContainer/InfiniteScrollContainer';
import MovieList from '../components/MovieList/MovieList';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { useParams } from 'react-router-dom';
import { requestSearchMovieList } from '../apis/requests/search';
import SkeletonMovieList from '../components/MovieList/SkeletonMovieList';

const SearchMovieListPage = () => {
  const { keyword } = useParams();
  const {
    data: movieList,
    isSuccess,
    ...rest
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.MOVIE.POPULAR, keyword],
    initialPageParam: 1,
    queryFn: ({ pageParam: page }) => requestSearchMovieList(page, keyword || ''), // TODO: 오류 핸들링 필요
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
      <Text style={{ color: 'white' }}>{keyword} 검색 결과</Text>

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

export default SearchMovieListPage;
