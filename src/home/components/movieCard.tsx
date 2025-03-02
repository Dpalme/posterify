import { TMDBImage } from '#/shared/components/tmdbimages/tmdbImg';
import { ITMDBMovie } from '#/shared/models/movie';
import { Link } from '@tanstack/react-router';

export function MovieCard({
  movie,
  index,
  setInitialIndex,
}: {
  movie: ITMDBMovie;
  index?: number;
  setInitialIndex?: (n: number) => void;
}) {
  return (
    <Link
      to={`/movies/$movieId`}
      params={{ movieId: movie.id?.toString?.() }}
      className="hover:z-2 transform-gpu transition-transform duration-300 hover:!scale-110"
      key={movie.id}
      onClick={() => {
        !!index && !!setInitialIndex && setInitialIndex(index);
      }}
    >
      <div style={{ aspectRatio: '0.667 / 1' }}>
        <TMDBImage
          type="poster"
          path={movie.poster_path}
        />
      </div>
      <div className="p-2 text-slate-300">
        <h2 className="mb-1 truncate text-sm">{movie.title}</h2>
        <p className="text-xs">{movie?.release_date?.slice(0, 4)}</p>
      </div>
    </Link>
  );
}
