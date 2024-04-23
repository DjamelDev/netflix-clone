import React from "react";
import { useParams } from "react-router-dom";
import "./Video.scss";

const Video = () => {
  //   let { id } = useParams();

  let id = "8lZki_Z35N0";

  console.log(id);
  return (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="video"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
