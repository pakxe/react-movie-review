import { ReactNode, useEffect, useRef } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { useObserver } from '../../hooks/useObserver';

type InfiniteScrollContainer = {
  children: ReactNode;
  fetchNextPage: () => void;
  isFetching: boolean;
  rootMargin?: number;
  isError: boolean;
  error: Error | null;
  skeletonList?: ReactNode;
  length?: number;
  hasNextPage: boolean;
};

export default function InfiniteScrollContainer({
  children,
  isFetching,
  fetchNextPage,
  rootMargin = 200,
  isError,
  error,
  skeletonList,
  hasNextPage,
}: InfiniteScrollContainer) {
  const bottom = useRef(null);

  const onIntersect = ([entry]: IntersectionObserverEntry[]) => !isFetching && entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottom,
    onIntersect,
    rootMargin: rootMargin + 'px', // 바닥에 덜 잫도록
  });

  useEffect(() => {
    if (isError && error) alert(error.message);
  }, [isError]);

  return (
    <>
      {children}
      {!isFetching && <div ref={bottom}></div>}
      {(isFetching || hasNextPage) && skeletonList}
      {isFetching && <LoadingSpinner />}
    </>
  );
}
