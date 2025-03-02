import { ImageCard } from '#/shared/components/tmdbimages/imageCard';
import { Link } from '@tanstack/react-router';

export const Tutorial = () => {
  return (
    <>
      <h1 className="mb-4 text-2xl">You haven't collected anything!</h1>
      <p>
        Try going to the{' '}
        <Link
          to="/"
          className="font-extrabold text-emerald-600"
        >
          homepage
        </Link>{' '}
        and finding a film you like
      </p>
      <p className="mb-2">
        Once there, click on any image you like and click the heart icon.
      </p>
      <p>Here's an example image:</p>
      <div className="max-w-64">
        <ImageCard
          type="poster"
          movie_id={'772515'}
          file_path="/1mZcxuL4GLUvPdEXC4iZPjG2EO3.jpg"
          aspect_ratio={0.667}
          height={3000}
          width={2000}
        />
      </div>
    </>
  );
};

export default Tutorial;
