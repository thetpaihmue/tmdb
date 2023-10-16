import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Movies.css";
import { useEffect, useState } from "react";
import { popularMovies } from "../Services/Apis";
import { Button, Card, Alert } from "react-bootstrap";

const Movies = () => {
  const [moviesData, setMoviesData] = useState<any[]>([]);

  useEffect(() => {
    popularMovies()
      .then((response) => {
        setMoviesData(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
      });
  }, []);

  const card = moviesData.map((movie) => (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={movie.id}>
      <Card style={{ width: "auto" }} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={`https://www.themoviedb.org/t/p/original/${movie.backdrop_path}`}
            className="mt-3"
          />
        </div>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
        </Card.Body>
        <Card.Footer className="bg-white">
          <Button variant="primary">View</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row m-3">
        {moviesData.length ? (
          card
        ) : (
          <Alert variant="danger">No movies found!</Alert>
        )}
      </div>{" "}
    </>
  );
};

export default Movies;
