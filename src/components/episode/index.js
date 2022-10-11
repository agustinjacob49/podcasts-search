import "./episode.scss";
import React, { memo } from "react";
import parse from 'html-react-parser';
import Player from "../player";

const Episode = ({ src, description, episodeTitle }) => {
  return (
    <div className='podcast-details__episodes'>
      <div className='podcast-details__episodes__title__container'>
              <h2 className='podcast-details__episodes__title__container__h2'>{episodeTitle}</h2>
              <div className='episde-details__content'>{parse(description)}</div>
              <hr className='podcast-details__hr'/>
              <Player src={src}/>
      </div>
  </div>
  );
};

export default memo(Episode);
