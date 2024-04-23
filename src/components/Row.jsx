import React, { useEffect, useState } from "react";
import "./Row.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Row = ({ title, fetchUrl, isPoster }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/video/${movie?.id}`}>
              {isPoster ? (
                <img
                  src={`${baseUrl}${movie.poster_path}`}
                  alt={movie.title ? movie.title : movie.original_name}
                  className="row__image"
                />
              ) : (
                <img
                  src={`${baseUrl}${movie.backdrop_path}`}
                  alt={movie.title ? movie.title : movie.original_name}
                  className="row__image"
                />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
