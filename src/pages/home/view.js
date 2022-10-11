import React, { memo } from 'react';
import getHomeHOC from './view-hoc';
import Filters from '../../components/filters';
import Podcasts from '../../components/grid';

const View = ({ podcasts, inputValue, handleOnChangeFilter, handleOnClickFilterButton}) => {

    return (
        <div>
            <Filters value={inputValue} handleOnChangeFilter={handleOnChangeFilter} handleOnClickFilterButton={handleOnClickFilterButton}/>
            { podcasts && <Podcasts podcasts={podcasts}/> }
        </div>
    );
};

export default getHomeHOC(memo(View));