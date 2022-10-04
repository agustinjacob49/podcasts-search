import React from 'react';
import getEpisodeDetailsHOC from './view-hoc';

const View = () => {

    return (
        <div>
            <h1>Episode details</h1>
        </div>
    );
};

export default getEpisodeDetailsHOC(View);