import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Movies.css";
import { useEffect, useState } from "react";
import { Button, Card, Alert, Pagination, Spinner } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { popularMovies, searchMovie } from "../Services/Apis";
import placeholder from "../assets/placeholder.jpg";
import moviesReducer from "../Reducers/moviesReducer";
import { useReducer } from "react";
import { MovieActionEnum } from "../Types";

const Movies = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const location = useLocation();

  const [moviesData, dispatchMovies] = useReducer(moviesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get("search");
    console.log("searchQuery", searchQuery);
    dispatchMovies({ type: MovieActionEnum.MOVIES_FETCH_INIT });

    if (searchQuery) {
      searchMovie(searchQuery)
        .then((response) => {
          dispatchMovies({
            type: MovieActionEnum.MOVIES_FETCH_SUCCESS,
            payload: response.data.results,
          });
        })
        .catch(() =>
          dispatchMovies({ type: MovieActionEnum.MOVIES_FETCH_FAIL })
        );
    } else {
      popularMovies(currentPage.toString())
        .then((response) => {
          dispatchMovies({
            type: MovieActionEnum.MOVIES_FETCH_SUCCESS,
            payload: response.data.results,
          });
        })
        .catch(() =>
          dispatchMovies({ type: MovieActionEnum.MOVIES_FETCH_FAIL })
        );
    }
  }, [currentPage, location.search]);

  const handleView = (id: number) => {
    navigate(`/movie/${id}`);
  };

  const card = moviesData.data.map((movie) => (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={movie.id}>
      <Card
        style={{ width: "auto", backgroundColor: "#fff", borderRadius: "10%" }}
        className="h-100 border-0"
      >
        <div className="text-center" style={{ width: "100%", height: "100%" }}>
          <Card.Img
            variant="top"
            src={
              movie.backdrop_path
                ? `https://www.themoviedb.org/t/p/original/${movie.backdrop_path}`
                : placeholder
            }
            className="img-cropped"
            style={{ width: "240px", height: "200px" }}
          />
        </div>
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Text
            className="text-dark"
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {movie.title}
          </Card.Text>

          <Button
            style={{
              backgroundColor: "#0d253f",
              border: "none",
            }}
            onClick={() => handleView(movie.id)}
          >
            View
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <>
      {moviesData.isError && <Alert variant="danger">Something worng</Alert>}

      {moviesData.isLoading ? (
        <div className="d-flex justify-content-center mt-5 mb-5">
          <Spinner animation="border" variant="info" />
        </div>
      ) : (
        <div className="row m-3">{card}</div>
      )}
      <div className="d-flex justify-content-center">
        <Pagination>
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />
        </Pagination>
      </div>
    </>
  );
};

export default Movies;
