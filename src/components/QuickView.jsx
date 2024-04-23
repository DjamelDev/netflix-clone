import React from "react";
import "./QuickView.scss";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const QuickView = ({ bannerStyle, movie, popup, popupStatus }) => {
  const recommandedPercentage = Math.floor(Math.random() * 100);
  if (recommandedPercentage > 100) {
    recommandedPercentage - 1;
  } else if (recommandedPercentage < 20) {
    recommandedPercentage + 30;
  }
  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : new Date(movie.first_air_date).getFullYear();

  return (
    <div className={`quickView ${popupStatus && "open"}`}>
      <div className="quickView__banner" style={bannerStyle}>
        <div className="quickView__content">
          <p className="precontent">
            <span>Recommandé à {recommandedPercentage} %</span> {releaseYear}
          </p>
          <h3 className="quickView__title">
            {movie.title ? movie.title : movie.original_name}
          </h3>
          <p>
            {movie.overview
              ? movie.overview
              : "Pas de description pour ce film."}
          </p>
        </div>
        <button onClick={popup} className="quickView__close">
          <HighlightOffIcon />
        </button>
      </div>
    </div>
  );
};

export default QuickView;
