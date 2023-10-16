import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Movies.css";
import { useEffect, useState } from "react";
import { popularMovies } from "../Services/Apis";

const Movies = () => {
  const [moviesData, setMoviesData] = useState(null);

  useEffect(() => {
    popularMovies()
      .then((response) => {
        setMoviesData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
      });
  }, []);

  return (
    <>
      <div>
        {moviesData ? (
          <pre>{JSON.stringify(moviesData, null, 2)}</pre>
        ) : (
          "Loading movies..."
        )}
      </div>
    </>
  );
};

export default Movies;
