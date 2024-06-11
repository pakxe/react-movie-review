import { useState } from 'react';
import { Movie } from '../../types/movie';
import RatioImageBox from '../RatioImageBox/RatioImageBox';
import Text from '../Text/Text';
import { StyledMovieItem as S } from './MovieItem.style';
import { Modal } from '@pakxe/react-simple-modal';

export default function MovieItem({ title, poster_path, vote_average, overview }: Movie) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <S.Container onClick={handleOpen}>
        <RatioImageBox ratio={166} src={'https://image.tmdb.org/t/p/w500/' + poster_path} />
        <Text size='m' weight='l' style={{ color: 'white' }}>
          {title}
        </Text>
        <Text size='s' style={{ color: 'white' }}>
          🌟 {vote_average.toFixed(1)}
        </Text>
      </S.Container>
      {isOpen && (
        <Modal isOpen={isOpen} close={handleOpen} style={{ backgroundColor: '#212122' }}>
          <Modal.Header style={{ display: 'flex', justifyContent: 'center' }}>
            <Text size='m' weight='l' style={{ color: 'white' }}>
              {title}
            </Text>
          </Modal.Header>
          <Modal.Body style={{ display: 'flex', gap: '20px' }}>
            <img
              height={100}
              width={100}
              style={{ height: '100%', width: '200px' }}
              src={'https://image.tmdb.org/t/p/w500/' + poster_path}
            />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <Text size='s' style={{ color: 'white' }}>
                  🌟 {vote_average.toFixed(1)}
                </Text>
                <Text style={{ color: 'white' }}>{overview}</Text>
              </div>
              <div>🌟🌟🌟🌟🌟</div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}
