import React, { memo } from 'react';
import PodcastAside from '../../components/podcastAside';
import getEpisodeDetailsHOC from './view-hoc';
import Episode from '../../components/episode';

const View = ({ podcast, episode }) => {
    return (
        <div className="podcast-details">
            <PodcastAside  {...podcast} />
            <Episode {...episode}/>
        </div>
    );
};

export default getEpisodeDetailsHOC(memo(View));