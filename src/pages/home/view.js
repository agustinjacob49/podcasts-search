import React, { memo, useState } from 'react';
import getHomeHOC from './view-hoc';
import Filters from '../../components/filters';
import Podcasts from '../../components/grid';

const View = ({ podcasts }) => {

    const [inputValue, setInputValue] = useState('');

    const handleOnChangeFilter = (event) => {
        setInputValue(event.currentTarget.value.toLowerCase());
    };
    
    const handleOnClickFilterButton = () => {
        setInputValue('');
    };

    const filteredList = podcasts && podcasts.filter((podcast) => {
        if (inputValue === '') return podcast;

        return (
            podcast.author.toLowerCase().includes(inputValue) ||
            podcast.title.toLowerCase().includes(inputValue)
        );
      });

    return (
        <div>
            <Filters value={inputValue} handleOnChangeFilter={handleOnChangeFilter} handleOnClickFilterButton={handleOnClickFilterButton}/>
            { podcasts && <Podcasts podcasts={filteredList}/> }
        </div>
    );
};

export default getHomeHOC(memo(View));