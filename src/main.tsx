import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LoadingBackdrop } from './shared/components/backdrop';
import 'virtual:windi.css';
import './shared/providers/database';

import { createRouter, RouterProvider } from '@tanstack/react-router';
import rootRoute from './App';
import HomeRoute from './home/page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MovieRoute from './movies/movieRoute';
import SearchRoute from './search/SearchRoute';
import { CollectionRoute } from './collection/CollectionRoute';

const routeTree = rootRoute.addChildren([
  SearchRoute,
  MovieRoute,
  HomeRoute,
  CollectionRoute,
]);

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  context: { queryClient },
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingBackdrop />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>,
);
