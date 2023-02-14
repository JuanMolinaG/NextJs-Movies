import Image from 'next/image';
import Link from 'next/link';

export default function MovieCard({ id, title, poster_path, release_date }) {
  const imagePath = 'https://image.tmdb.org/t/p/original';
  return (
    <div>
      <h1 className="text-base">{title}</h1>
      <h2 className="text-sm">Release date: {release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          alt={title}
          width={200}
          height={300}
        ></Image>
      </Link>
    </div>
  );
}
