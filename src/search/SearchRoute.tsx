import { createRoute, lazyRouteComponent } from '@tanstack/react-router';

import rootRoute from '#/App';

import { HandleAsync } from '#/shared/components/handleAsync';
import { FallbackPosters } from '#/shared/components/fallbackPosters';
import MovieGrid from '#/shared/components/movieGrid';

import { getSearch } from './services';
import { useSearch } from './hooks';

type SearchArguments = {
  query: string;
};

const Route = createRoute({
  path: '/search',
  loaderDeps: ({ search: { query } }) => ({ query }),
  validateSearch: (search: Record<string, unknown>): SearchArguments => {
    // validate and parse the search params into a typed state
    return {
      query: (search.query as string) || '',
    };
  },
  getParentRoute: () => rootRoute,
  loader: (args) => {
    const queryClient = args.context.queryClient,
      query = args.deps.query;
    queryClient.prefetchInfiniteQuery({
      queryKey: ['search', query],
      queryFn: ({ pageParam }) => getSearch(query, pageParam),
      initialPageParam: 1,
    });
  },
  component: lazyRouteComponent(() => import('./page')),
});

export default Route;
