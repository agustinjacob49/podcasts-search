import React from 'react';
import getPodcastDetailsHOC from './view-hoc';

const View = ({ podcast }) => {

    console.log(podcast);
    return (
        <div>
            <h1>Podcast details</h1>
        </div>
    );
};

export default getPodcastDetailsHOC(View);