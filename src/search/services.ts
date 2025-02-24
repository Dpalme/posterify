import { useTMDB } from '#shared/hooks/useTMDB';
import { ITMDBMovie } from '#shared/models/movie';

export async function getSearch(
  query: string = '',
  page: number = 1,
): Promise<IPage<ITMDBMovie>> {
  if (query === '')
    return { page: 1, total_pages: 1, results: [], total_results: 0 };
  return useTMDB('/3/search/movie?query=' + query + '&page=' + page).then(
    (data: IPage<ITMDBMovie>) => {
      data.results = data.results.filter(
        (a) => !!a.poster_path && !!a.backdrop_path,
      );
      return data;
    },
  ) as unknown as Promise<IPage<ITMDBMovie>>;
}
