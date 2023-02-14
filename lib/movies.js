export async function getMovies() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return res.results;
}

export async function getAllMoviesIds() {
  const movies = await getMovies();

  return movies.map((movie) => {
    return {
      params: {
        id: movie.id.toString(),
      },
    };
  });
}

export async function getMovie(id) {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return res;
}
