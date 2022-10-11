import React, { memo } from 'react';
import PodcastAside from '../../components/podcastAside';
import getEpisodeDetailsHOC from './view-hoc';
import parse from 'html-react-parser';

const View = ({ podcast, episode }) => {
    const { episodeTitle, description } = episode;
    return (
        <div className="podcast-details">
            <PodcastAside  {...podcast} />
            <div className='podcast-details__episodes'>
            <div className='podcast-details__episodes__title__container'>
                    <h2 className='podcast-details__episodes__title__container__h2'>{episodeTitle}</h2>
                    <div>{parse(description)}</div>
                </div>
            </div>
        </div>
    );
};

export default getEpisodeDetailsHOC(memo(View));