import './home.scss';
import React from 'react';
import getHomeHOC from './view-hoc';

const View = () => {

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default getHomeHOC(View);