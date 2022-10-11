import './filters.scss';
import React from 'react';

const Filters = ({inputValue, handleOnChangeFilter, handleOnClickFilterButton}) => {

    return (
        <section className='filters'>
            <input data-testid="input-filter" className="filters__input" value={inputValue} placeholder="Filter podcasts..."  onChange={handleOnChangeFilter}/>
            <button data-testid="button-filter" className='filters__button' onClick={handleOnClickFilterButton}>
                100
            </button>
        </section>
    );
};

export default Filters;