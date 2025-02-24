import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getFeed } from './services';
import { useMemo } from 'react';

export const feedQuery = infiniteQueryOptions({
  queryKey: ['feed'],
  queryFn: ({ pageParam }) => getFeed(pageParam),
  initialPageParam: 1,
  getNextPageParam: (lastPage, _) =>
    lastPage.page + 1 < lastPage.total_pages ? lastPage.page + 1 : null,
  getPreviousPageParam: (lastPage, _) =>
    lastPage.page - 1 > 0 ? lastPage.page - 1 : null,
});

export const useFeed = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery(feedQuery);

  const movies = useMemo(() => {
    if (!data) return [];
    const seenMovies = new Set();
    const moviesArray = [];
    for (let i = 0; i < data.pages.length; i++) {
      for (let k = 0; k < data.pages[i].results.length; k++) {
        if (seenMovies.has(data.pages[i].results[k].id)) continue;
        seenMovies.add(data.pages[i].results[k].id);
        moviesArray.push(data.pages[i].results[k]);
      }
    }
    return moviesArray;
  }, [data?.pages]);

  return {
    movies: movies,
    error: error as AxiosError | undefined,
    loading: isLoading,
    fetchNextPage,
    hasNextPage,
  };
};
