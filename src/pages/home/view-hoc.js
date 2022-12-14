import React, { useEffect, useState, useContext } from 'react';
import { fetchPodcasts } from '../../utils/api/fetch';
import { LoaderContext } from '../../utils/context/loaderContext';

const getHomeHOC = View => {
    
    const HomeHOC = () => {
        const [podcasts, setPodcastsData] = useState(null);
        const [inputValue, setInputValue] = useState('');
        const { setIsLoading } = useContext(LoaderContext);

        const handleOnChangeFilter = (event) => {
            setInputValue(event.currentTarget.value.toLowerCase());
        };
    
        const handleOnClickFilterButton = () => {
            setInputValue('');
        };

        useEffect(() => {
            fetchPodcasts().then((response) => {
                setPodcastsData([...response]); 
                setIsLoading(false);
              }).catch( (err) => {
                console.log(`Something went wrong at HomeHOC - ${err}`);
              });
          }, [setIsLoading]);

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