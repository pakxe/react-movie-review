import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PATH } from './constants/paths';
import PopularMovieListPage from './pages/PopularMovieListPage';
import SearchMovieListPage from './pages/SearchMovieListPage';
import './reset.css';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout/Layout';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<div>root</div>} />
              <Route path={PATH.POPULAR_MOVIE_LIST} element={<PopularMovieListPage />} />
              <Route path={`${PATH.MOVIE_SEARCH_LIST}/:keyword`} element={<SearchMovieListPage />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
