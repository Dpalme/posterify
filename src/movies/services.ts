import { useTMDB } from '#shared/hooks/useTMDB';
import { ITMDBMovie } from '#shared/models/movie';

export async function getMovie(movieId: number | string): Promise<ITMDBMovie> {
  return useTMDB(
    '/3/movie/' + movieId + '?append_to_response=images',
  ) as unknown as Promise<ITMDBMovie>;
}
