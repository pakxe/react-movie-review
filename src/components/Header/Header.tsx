import { useState } from 'react';
import Text from '../Text/Text';
import { StyledHeader as S } from './Header.style';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/paths';

const Header = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <S.Header>
        <Text style={{ color: '#F33F3F' }} onClick={() => navigate(PATH.POPULAR_MOVIE_LIST)}>
          영화 목록
        </Text>
        <div style={{ display: 'flex' }}>
          <input onChange={(e) => setKeyword(e.target.value)} value={keyword} />
          <Button isSquare onClick={() => navigate(`${PATH.MOVIE_SEARCH_LIST}/${keyword}`)}>
            🔍
          </Button>
        </div>
      </S.Header>
    </>
  );
};

export default Header;
