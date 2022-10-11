import './episode-detail.scss';
import React, { memo } from 'react';
import PodcastAside from '../../components/podcastAside';
import getEpisodeDetailsHOC from './view-hoc';
import parse from 'html-react-parser';

const View = ({ podcast, episode }) => {
    const { episodeTitle, description, src } = episode;
    return (
        <div className="podcast-details">
            <PodcastAside  {...podcast} />
            <div className='podcast-details__episodes'>
                <div className='podcast-details__episodes__title__container'>
                        <h2 className='podcast-details__episodes__title__container__h2'>{episodeTitle}</h2>
                        <div className='episde-details__content'>{parse(description)}</div>
                        <hr className='podcast-details__hr'/>
                        <figure className='figure__player'>
                            <figcaption></figcaption>
                            <audio
                                className='figure__player__audio'
                                controls
                                src={src}>
                                    <a href={src}>
                                        Download audio
                                    </a>
                            </audio>
                        </figure>
                </div>
            </div>
        </div>
    );
};

export default getEpisodeDetailsHOC(memo(View));