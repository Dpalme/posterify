import { useMovie } from './hooks';
import { HandleAsync } from '#shared/components/handleAsync';
import { Container } from '#shared/components/container';
import { TMDBImage } from '#shared/components/tmdbimages/tmdbImg';
import { ImageCard } from '#shared/components/tmdbimages/imageCard';
import { getRouteApi } from '@tanstack/react-router';
import { VirtuosoGrid } from 'react-virtuoso';
import { useMemo, useRef } from 'react';
import { ResponsiveBackground } from '#/shared/components/tmdbimages/responsiveBackground';

const route = getRouteApi('/movies/$movieId');

function MoviePage() {
  const movieId = route.useParams().movieId;

  const scrollElement = useRef<HTMLDivElement>(null);
  const scrollElementBackdrops = useRef<HTMLDivElement>(null);

  const { movie, loading, error } = useMovie(movieId);
  const movieLogo = useMemo(
    () =>
      movie?.images?.logos.filter(
        (img) => img.iso_639_1 == movie.original_language,
      ),
    [movie],
  );

  const posters = useMemo(
    () =>
      movie?.images?.posters
        // .filter((poster) => poster.iso_639_1 === movie.original_language)
        .sort((a, b) => b.height - a.height + (b.width - a.width)) ?? [],
    [movie],
  );
  const backdrops = useMemo(
    () =>
      movie?.images?.backdrops.sort(
        (a, b) => b.height - a.height + (b.width - a.width),
      ) ?? [],
    [movie],
  );

  return (
    <HandleAsync
      loading={loading}
      error={error}
    >
      <div className="fixed top-0 flex h-screen w-screen flex-col justify-end gap-4">
        {!!movie && !!movie.backdrop_path && (
          <ResponsiveBackground imagePath={movie.backdrop_path} />
        )}
        <div
          // @ts-ignore
          style={{ '--tw-to-opacity': 0 }}
          className="flex w-full flex-col items-start justify-end gap-4 overscroll-auto bg-opacity-50 bg-gradient-to-r from-black via-[#0008] to-transparent p-8 pb-28 text-white drop-shadow-lg filter"
        >
          {movieLogo !== undefined && movieLogo.length > 0 ? (
            <TMDBImage
              type="logo"
              path={movieLogo[0].file_path}
              alt={movie?.title}
              fullSize={true}
              className="!w-96 object-contain object-left-bottom drop-shadow-md filter"
            />
          ) : (
            <h1 className="font-title text-4xl font-extrabold">
              {movie?.title}
            </h1>
          )}
          <div className="flex flex-row items-baseline gap-2">
            <p className="font-bold">
              {movie?.release_date.slice(0, 4)}
              {movie?.title != movie?.original_title && (
                <>
                  {' | '}
                  <span className="font-thin italic">
                    {movie?.original_title}
                  </span>
                </>
              )}
            </p>
            <p className="opacity-50">{movie?.vote_average.toFixed(1)} / 10</p>
          </div>
        </div>
      </div>

      <div className="h-[90dvh]"></div>

      <div
        className="bg-white !bg-opacity-50 p-8 backdrop-blur-md backdrop-filter dark:bg-black"
        ref={scrollElement}
      >
        <VirtuosoGrid
          customScrollParent={scrollElement.current!}
          listClassName="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-4"
          data={posters}
          itemContent={(_, img) => (
            <ImageCard
              type="poster"
              movie_id={movieId}
              key={img.file_path}
              {...img}
            />
          )}
        />
      </div>
      <div
        className="bg-white !bg-opacity-50 p-8 backdrop-blur-md backdrop-filter dark:bg-black"
        ref={scrollElementBackdrops}
      >
        <VirtuosoGrid
          customScrollParent={scrollElementBackdrops.current!}
          totalCount={backdrops.length}
          className="mt-16"
          listClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          data={backdrops}
          increaseViewportBy={{ top: window.innerHeight * 0.9, bottom: 0 }}
          itemContent={(_, img) => (
            <ImageCard
              type="backdrop"
              movie_id={movieId}
              {...img}
              key={img.file_path}
            />
          )}
        />
      </div>
    </HandleAsync>
  );
}

export default MoviePage;
