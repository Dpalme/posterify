import { createRoute, lazyRouteComponent } from '@tanstack/react-router';
import rootRoute from '#/App';
import { getCollection } from '#/shared/providers/database';

export const CollectionRoute = createRoute({
  path: '/collection',
  getParentRoute: () => rootRoute,
  beforeLoad: ({ context: { queryClient } }) =>
    queryClient.prefetchQuery({
      queryKey: ['collection'],
      queryFn: () => getCollection(),
    }),
  component: lazyRouteComponent(() => import('./page')),
});
