import Layout from '@/components/layout';
import { getAllMoviesIds, getMovie } from '@/lib/movies';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps({ params }) {
  const movie = await getMovie(params.id);

  return {
    props: {
      movie,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllMoviesIds();

  return {
    paths,
    fallback: false,
  };
}

export default function Movie({ movie }) {
  const imagePath = 'https://image.tmdb.org/t/p/original';
  return (
    <Layout>
      <div className="flex ">
        <div>
          <Image
            priority
            src={imagePath + movie.poster_path}
            alt={movie.title}
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
        <div className="ml-20">
          <h2 className="text-2xl">{movie.title}</h2>
          <h2 className="text-lg">{movie.release_date}</h2>
          <span className="bg-green-600 inline-block my-2 py-2 px-4 rounded-md text-sm">
            {movie.status}
          </span>
          <span className="block mb-4">
            <strong>Genres: </strong>
            {new Intl.ListFormat('en', { style: 'short' }).format(
              movie.genres.map((genre) => genre.name)
            )}
          </span>
          <p>
            <strong>Overview: </strong>
            {movie.overview}
          </p>
          <Link
            href="/"
            className="mt-10 inline-block bg-neutral-400/50 py-2 px-4 rounded-md text-sm"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
