import React, { memo } from 'react';
import getHomeHOC from './view-hoc';
import Filters from '../../components/filters';
import Podcasts from '../../components/grid';

const View = ({ podcasts }) => {

    return (
        <div>
            <Filters />
            <Podcasts podcasts={podcasts}/>
        </div>
    );
};

export default getHomeHOC(memo(View));