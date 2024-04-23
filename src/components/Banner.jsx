import React, { useEffect, useState } from "react";
import "./Banner.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import requests from "../config/requests";
import axios from "axios";
import QuickView from "./QuickView";
import { Link } from "react-router-dom";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [popup, setPopup] = useState(false);

  function handleClickPopup() {
    setPopup(!popup);
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncateText(string, n) {
    return string.substr(0, n - 1) + "...";
  }

  if (!movie) {
    return null;
  }

  const bannerStyle = movie.backdrop_path
    ? {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }
    : null;

  console.log(popup);

  return (
    <header className="banner" style={movie.backdrop_path ? bannerStyle : null}>
      <div className="banner__content">
        <h1 className="banner__title">
          {movie.title ? movie.title : movie.original_name}
        </h1>
        <p className="banner__description">
          {movie.overview
            ? truncateText(movie.overview, 100)
            : "Pas de description pour ce film."}
        </p>
        <div className="banner__buttons">
          <Link to={`/video/${movie?.id}`}>
            <button className="banner__button first">
              <PlayArrowIcon style={{ fontSize: "2rem" }} />{" "}
              <span>Lecture</span>
            </button>
          </Link>
          <button className="banner__button second">
            <InfoOutlinedIcon style={{ fontSize: "2rem" }} />{" "}
            <span onClick={handleClickPopup}>Plus d'infos</span>
          </button>
        </div>
      </div>
      <QuickView
        bannerStyle={bannerStyle}
        movie={movie}
        popup={handleClickPopup}
        popupStatus={popup}
      />
    </header>
  );
};

export default Banner;
