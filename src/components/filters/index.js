import './filters.scss';
import React from 'react';

const Filters = ({inputValue, handleOnChangeFilter, handleOnClickFilterButton}) => {

    return (
        <section className='filters'>
            <input className="filters__input" value={inputValue} placeholder="Filter podcasts..."  onChange={handleOnChangeFilter}/>
            <button className='filters__button' onClick={handleOnClickFilterButton}>
                100
            </button>
        </section>
    );
};

export default Filters;