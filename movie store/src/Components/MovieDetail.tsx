import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../Services/Apis";
import "../Styles/MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  console.log("id", id);

  const [movieDetailData, setMovieDetailData] = useState<any>();

  useEffect(() => {
    if (id) {
      movieDetail(id)
        .then((response) => {
          console.log("response", response);
          setMovieDetailData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching movie detail:", error);
        });
    }
  }, [id]);

  const backgroundImageStyle = {
    backgroundImage: `url(https://www.themoviedb.org/t/p/original/${movieDetailData?.backdrop_path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white",
  };

  return (
    <>
      <div className="row m-3" style={backgroundImageStyle}>
        <div className="col-lg-4 col-md-4 col-sm-6 mb-3">
          <div className="text-center backdrop">
            <img
              className="d-inline poster"
              src={`https://www.themoviedb.org/t/p/original/${movieDetailData?.backdrop_path}`}
              alt="Movie Backdrop"
            />
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-6 mb-3">
          <h1 style={{ color: "white" }}>{movieDetailData?.original_title}</h1>
          <p style={{ color: "white" }}>{movieDetailData?.overview}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
