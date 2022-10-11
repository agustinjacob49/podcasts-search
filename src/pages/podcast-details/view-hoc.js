/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPodcast } from '../../utils/api/fetch';

const getPodcastDetailsHOC = View => {
    
    const podcastDetailsHOC = ({loadingCallback}) => {
        const [podcast, setPodcast] = useState(null);
        const { podcastId } = useParams();

        useEffect(() => {
            loadingCallback(true);
            fetchPodcast(podcastId).then((podcast) => {
                setPodcast({ podcast }); 
                loadingCallback(false);
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