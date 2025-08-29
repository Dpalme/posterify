import { HandleAsync } from '#shared/components/handleAsync';
import { feedQuery, useFeed } from './hooks';
import { FallbackPosters } from '#/shared/components/fallbackPosters';
import { createRoute } from '@tanstack/react-router';
import rootRoute from '#/App';
import MovieGrid from '#/shared/components/movieGrid';
import { LoadingSpinner } from '#/shared/components/loadingSpinner';

export const HomeRoute = createRoute({
  path: '/',
  getParentRoute: () => rootRoute,
  loader: ({ context: { queryClient } }) =>
    queryClient.prefetchInfiniteQuery(feedQuery),
  component: Homepage,
  pendingComponent: LoadingSpinner,
});

function setInitialIndex(n: number) {
  window.localStorage.setItem('lastMovieHome', String(n));
}
function Homepage() {
  const { movies, error, loading, fetchNextPage } = useFeed();
  const initialIndex = Number(
    window.localStorage.getItem('lastMovieHome') || 0,
  );
  return (
    <HandleAsync
      loading={loading}
      error={error}
      fallback={<FallbackPosters numberOfPosters={32} />}
    >
      <MovieGrid
        movies={movies}
        fetchNextPage={fetchNextPage}
        initialIndex={initialIndex}
        setInitialIndex={setInitialIndex}
      />
    </HandleAsync>
  );
}

export default HomeRoute;
