import { useTMDB } from '#shared/hooks/useTMDB';
import { ITMDBMovie } from '#shared/models/movie';

export async function getFeed(page: number): Promise<IPage<ITMDBMovie>> {
  return useTMDB(
    `/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&vote_count.gte=1000`,
  ) as unknown as Promise<IPage<ITMDBMovie>>;
}
