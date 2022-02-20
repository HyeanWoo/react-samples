import { useCallback } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovieById = useCallback(async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
  }, [id]);

  useEffect(() => {
    getMovieById();
  }, [getMovieById]);

  return (
    <div>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <div>rating: {movie.rating}</div>
          <div>runtime: {movie.runtime}</div>
          <div>{movie.description_intro}</div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
