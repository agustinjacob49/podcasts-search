import React from 'react';
import PodcastAside from '../../components/podcastAside';
import getEpisodeDetailsHOC from './view-hoc';

const View = ({ podcast, episode }) => {

    console.log("podcast" ,podcast);
    console.log("episode" ,episode);
    return (
        <div className="podcast-details">
            <PodcastAside  {...podcast} />
            <div className='podcast-details__episodes'>
                <div  className='card_container'>
                    <h1>hola</h1>
                </div>
            </div>
        </div>
    );
};

export default getEpisodeDetailsHOC(View);