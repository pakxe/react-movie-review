import React from 'react';
import styled, { keyframes } from 'styled-components';

const SkeletonItem = styled.div`
  width: 100%;
  height: 30px;
  background-color: #f2f2f2;
  position: relative;
  overflow: hidden;
  border-radius: 4px;

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(123, 0, 0, 0.6);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 0, 0, 0.6);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: skeleton-gradient 0.7s infinite ease-in-out;
  }
`;

const skeletonAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  animation: ${skeletonAnimation} 1.5s infinite linear;
`;

const SkeletonImage = styled(SkeletonItem)`
  width: 100%;
  height: 0;

  padding-bottom: 166%;

  margin: 10px 0;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
`;

const SkeletonText = styled(SkeletonItem)`
  width: 60%;
  height: 20px;
  margin: 10px 0;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
`;

const SkeletonRating = styled.div`
  width: 30%;
  height: 20px;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  animation: ${skeletonAnimation} 1.5s infinite linear;
`;

const SkeletonMovieItem: React.FC = () => {
  return (
    <SkeletonContainer>
      <SkeletonImage />
      <SkeletonText />
      <SkeletonRating />
    </SkeletonContainer>
  );
};

export default SkeletonMovieItem;
