import { getRouteApi } from '@tanstack/react-router';

import { HandleAsync } from '#/shared/components/handleAsync';
import { FallbackPosters } from '#/shared/components/fallbackPosters';
import MovieGrid from '#/shared/components/movieGrid';

import { useSearch } from './hooks';

const Route = getRouteApi('/search');

function setInitialIndex(n: number) {
  window.localStorage.setItem('lastMovieSearch', String(n));
}

export default function SearchResultsPage() {
  const { query } = Route.useSearch();
  const { movies, error, loading, fetchNextPage } = useSearch(query);
  const initialIndex = Number(
    window.localStorage.getItem('lastMovieSearch') || 0,
  );

  return (
    <HandleAsync
      loading={loading}
      error={error}
      fallback={<FallbackPosters numberOfPosters={25} />}
    >
      {!!movies && movies.length == 0 && query && (
        <p className="font-title text-3xl">No results</p>
      )}
      <MovieGrid
        movies={movies}
        fetchNextPage={fetchNextPage}
        initialIndex={initialIndex}
        setInitialIndex={setInitialIndex}
      />
    </HandleAsync>
  );
}
