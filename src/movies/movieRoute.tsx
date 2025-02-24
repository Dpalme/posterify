import rootRoute from '#/App';
import { createRoute, lazyRouteComponent } from '@tanstack/react-router';
import { getMovie } from './services';
import { ErrorMessage } from '#/shared/components/errorMessage';
import { LoadingBackdrop } from '#/shared/components/backdrop';

export const MovieRoute = createRoute({
  path: '/movies/$movieId',
  getParentRoute: () => rootRoute,
  parseParams: (params) => {
    return {
      movieId: params.movieId + '',
    };
  },
  loader: ({ context, params }) => {
    const queryClient = context.queryClient,
      movieId = params.movieId;
    queryClient.prefetchQuery({
      queryKey: ['movies', movieId],
      queryFn: () => getMovie(movieId),
    });
  },
  errorComponent: ({ error }) => <ErrorMessage message={error!.toString()} />,
  component: lazyRouteComponent(() => import('./lazyMovieComponent')),
  pendingComponent: LoadingBackdrop,
});

export default MovieRoute;
