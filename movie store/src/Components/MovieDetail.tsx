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

  return (
    <div className="movie-detail-container">
      {movieDetailData && (
        <div
          className="background-image"
          style={{
            backgroundImage: `url('https://www.themoviedb.org/t/p/original/${movieDetailData.backdrop_path}')`,
          }}
        ></div>
      )}

      <div className="content">
        <div className="overlay-image">
          {movieDetailData && (
            <img
              src={`https://www.themoviedb.org/t/p/original/${movieDetailData.backdrop_path}`}
              alt="Movie Backdrop"
            />
          )}
        </div>

        <div className="text-content">
          <h3>{movieDetailData?.original_title}</h3>
          <p>{movieDetailData?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
