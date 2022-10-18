/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPodcast } from '../../utils/api/fetch';
import LoaderContext from '../../utils/context/loaderContext';

const getPodcastDetailsHOC = View => {
    
    const podcastDetailsHOC = ({loadingCallback}) => {
        const [podcast, setPodcast] = useState(null);
        const { podcastId } = useParams();
        const { setIsLoading } = useContext(LoaderContext);

        useEffect(() => {
            setIsLoading(true);
            fetchPodcast(podcastId).then((podcast) => {
                setPodcast({ podcast }); 
                setIsLoading(false);
              }).catch( (err) => {
                console.log(`Something went wrong at podcastDetailsHOC - ${err}`);
              });
          }, []);

        const props = {
            ...podcast
        }
       
        return (
            podcast && <View {...props} />
        );
    }

    return podcastDetailsHOC;

};  

export default getPodcastDetailsHOC;