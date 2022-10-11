import React, { memo } from "react";
import "./player.scss";

const Player = ({ src }) => {
  return (
    <figure className="figure__player">
      <figcaption></figcaption>
      <audio className="figure__player__audio" controls src={src}>
        <a href={src}>Download audio</a>
      </audio>
    </figure>
  );
};

export default memo(Player);
