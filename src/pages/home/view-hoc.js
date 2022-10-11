import React, { useEffect, useState } from 'react';
import { fetchPodcasts } from '../../utils/api/fetch';

const getHomeHOC = View => {
    
    const HomeHOC = ({loadingCallback}) => {
        const [podcasts, setPodcastsData] = useState(null);
        const [inputValue, setInputValue] = useState('');

        const handleOnChangeFilter = (event) => {
            setInputValue(event.currentTarget.value.toLowerCase());
        };
    
        const handleOnClickFilterButton = () => {
            setInputValue('');
        };

        useEffect(() => {
            fetchPodcasts().then((podcasts) => {
                setPodcastsData([...podcasts]); 
                loadingCallback(false);
              }).catch( (err) => {
                console.log(`Something went wrong at HomeHOC - ${err}`);
              });
          }, []);

        const filteredList = podcasts && podcasts.filter((podcast) => {
            if (inputValue === '') return podcast;

            return (
                podcast.author.toLowerCase().includes(inputValue) ||
                podcast.title.toLowerCase().includes(inputValue)
            );
        });

        const props = {
            podcasts: filteredList,
            inputValue,
            handleOnChangeFilter,
            handleOnClickFilterButton
        }

        return (
            <View {...props} />
        );
    }

    return HomeHOC;

};  

export default getHomeHOC;