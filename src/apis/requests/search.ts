import { Movie } from '../../types/movie';
import { END_POINT } from '../endpoints';
import { requestGet } from '../fetcher';

type ResponseSearchMovieList = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export const requestSearchMovieList = async (page: number, keyword: string) => {
  const userLanguage = navigator.language;

  const queryParams = {
    page,
    language: userLanguage,
    query: keyword,
  };

  const {
    results,
    total_pages,
    page: curPage,
  } = await requestGet<ResponseSearchMovieList>({
    baseUrl: process.env.VITE_API_URL!,
    endpoint: END_POINT.SEARCH.MOVIE,
    queryParams,
    errorMessage: '검색 결과를 불러올 수 없습니다.',
  });

  return {
    results,
    hasNextPage: curPage < total_pages,
    nextCursor: curPage + 1,
  };
};
