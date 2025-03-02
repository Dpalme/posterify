import { useGetCollection } from './hooks';
import { HandleAsync } from '#/shared/components/handleAsync';
import { Container } from '#/shared/components/container';
import { ImageCard } from '#/shared/components/tmdbimages/imageCard';
import { FallbackPosters } from '#/shared/components/fallbackPosters';
import Tutorial from './tutorial';
function CollectionPage() {
  const { collection, isLoading, error } = useGetCollection();

  return (
    <Container>
      <div className="grid grid-cols-1 gap-2">
        <HandleAsync
          loading={isLoading}
          error={error}
        >
          {!collection || (collection.length == 0 && <Tutorial />)}
        </HandleAsync>
        <HandleAsync
          loading={isLoading}
          error={false}
          fallback={<FallbackPosters numberOfPosters={5} />}
        >
          {collection
            ?.filter((a) => a.type == 'poster')
            .sort(
              (a, b) =>
                new Date(b.added_on).getTime() - new Date(a.added_on).getTime(),
            )
            .map((entry) => (
              <ImageCard
                type="backdrop"
                file_path={entry.file_path}
                movie_id={entry.movie_id}
                key={entry.file_path}
                aspect_ratio={entry.aspect_ratio}
                width={entry.width}
                height={entry.height}
              />
            ))}
        </HandleAsync>
      </div>
      <div className="grid grid-cols-1 gap-2">
        <HandleAsync
          loading={isLoading}
          error={false}
          fallback={
            <FallbackPosters
              numberOfPosters={5}
              type="backdrop"
            />
          }
        >
          {collection
            ?.filter((a) => a.type == 'backdrop')
            .sort(
              (a, b) =>
                new Date(b.added_on).getTime() - new Date(a.added_on).getTime(),
            )
            .map((entry) => (
              <ImageCard
                type="backdrop"
                file_path={entry.file_path}
                movie_id={entry.movie_id}
                key={entry.file_path}
                aspect_ratio={entry.aspect_ratio}
                width={entry.width}
                height={entry.height}
              />
            ))}
        </HandleAsync>
      </div>
    </Container>
  );
}
export default CollectionPage;
