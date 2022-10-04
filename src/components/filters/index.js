import './filters.scss';
import React from 'react';

const Filters = () => {

    return (
        <section className='filters'>
            <input className="filters__input" placeholder="Filter podcasts..." />
            <button className='filters__button'>
                100
            </button>
        </section>
    );
};

export default Filters;