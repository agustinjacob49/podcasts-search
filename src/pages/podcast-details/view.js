import './home.scss';
import React from 'react';
import getPodcastDetailsHOC from './view-hoc';

const View = () => {

    return (
        <div>
            <h1>Podcast details</h1>
        </div>
    );
};

export default getPodcastDetailsHOC(View);