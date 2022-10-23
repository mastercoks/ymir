import { useMovies } from "../../services";

export const Main: React.FC = () => {
  const { movies, isError, isLoading } = useMovies();
  console.log(movies);

  return (
    <div>
      {movies?.map(({ title, large_cover_image }, key) => (
        <div key={key}>
          <img src={large_cover_image} alt={title} />
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
};
