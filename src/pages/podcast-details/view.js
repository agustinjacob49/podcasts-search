import './podcast-details.scss';
import React from 'react';
import getPodcastDetailsHOC from './view-hoc';
import PodcastAside from '../../components/podcastAside';
import Table from '../../components/table';

const View = ({ podcast }) => {
    const { episodes, id } = podcast;
    return (
        <div className="podcast-details">
            <PodcastAside  {...podcast} />
            <div className='podcast-details__episodes'>
                <div className='podcast-details__episodes__title__container'>
                    <h2 className='podcast-details__episodes__title__container__h2'>Episodes: {episodes.length}</h2>
                </div>
                <div  className='card_container table-card'>
                    <Table episodes={episodes} podcastId={id}/>
                </div>
            </div>
        </div>
    );
};

export default getPodcastDetailsHOC(View);