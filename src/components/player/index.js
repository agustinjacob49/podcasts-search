import "./player.scss";
import React, { memo } from "react";
import PropTypes from 'prop-types';

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

Player.propTypes = {
  src: PropTypes.string,
};

export default memo(Player);
