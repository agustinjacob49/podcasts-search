import './home.scss';
import React from 'react';
import getChaperDetailsHOC from './view-hoc';

const View = () => {

    return (
        <div>
            <h1>Chapter details</h1>
        </div>
    );
};

export default getChaperDetailsHOC(View);