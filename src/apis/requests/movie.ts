import { Movie } from '../../types/movie';
import { END_POINT } from '../endpoints';
import { requestGet } from '../fetcher';

type ResponsePopularMovieList = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export const requestPopularMovieList = async (page: number) => {
  const userLanguage = navigator.language;

  const queryParams = {
    page,
    language: userLanguage,
  };

  const {
    results,
    total_pages,
    page: curPage,
  } = await requestGet<ResponsePopularMovieList>({
    baseUrl: process.env.VITE_API_URL!,
    endpoint: END_POINT.MOVIE.POPULAR,
    queryParams,
    errorMessage: '영화 목록을 불러올 수 없습니다.',
  });

  return {
    results,
    hasNextPage: curPage < total_pages,
    nextCursor: curPage + 1,
  };
};
