import React from 'react';
import getHomeHOC from './view-hoc';
import Filters from '../../components/filters';
import Podcasts from '../../components/grid';

const View = () => {

    return (
        <div>
            <Filters />
            <Podcasts />
        </div>
    );
};

export default getHomeHOC(View);