import Layout from '@/components/Layout';
import MovieCard from '@/components/MovieCard';
import { getMovies } from '@/lib/movies';

export async function getStaticProps() {
  const movies = await getMovies();

  return {
    props: {
      movies,
    },
  };
}

export default function Home({ movies }) {
  return (
    <Layout>
      <div className="grid gap-16 grid-cols-fluid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </Layout>
  );
}
