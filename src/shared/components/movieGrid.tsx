import { MovieCard } from '#/home/components/movieCard';
import { VirtuosoGrid } from 'react-virtuoso';
import { ITMDBMovie } from '../models/movie';

export default function MovieGrid({
  movies,
  fetchNextPage,
  initialIndex,
  setInitialIndex,
}: {
  movies?: ITMDBMovie[];
  fetchNextPage?: () => void;
  initialIndex?: number;
  setInitialIndex?: (n: number) => void;
}) {
  return (
    <VirtuosoGrid
      initialTopMostItemIndex={initialIndex}
      listClassName="mt-24 p-8 grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-2"
      data={movies}
      endReached={() => fetchNextPage?.()}
      increaseViewportBy={700}
      className="hover:scale-75"
      itemClassName="transform hover:!scale-100"
      itemContent={(i, movie) => {
        return !!movie ? (
          <MovieCard
            movie={movie}
            key={movie?.id}
            index={i}
            setInitialIndex={setInitialIndex}
          />
        ) : (
          <>
            <div
              style={{ aspectRatio: '0.667 / 1' }}
              className="bg-slate-600"
            ></div>
            <div className="p-2">
              <h2 className="mb-1 truncate rounded-md bg-slate-600 text-sm"></h2>
              <p className="rounded-md bg-slate-800 text-xs"></p>
            </div>
          </>
        );
      }}
    />
  );
}
