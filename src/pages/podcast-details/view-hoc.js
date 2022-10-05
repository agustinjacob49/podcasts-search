/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPodcast } from '../../utils/api/fetch';

const getPodcastDetailsHOC = View => {
    
    const podcastDetailsHOC = ({loadingCallback}) => {
        const [podcastData, setPodcastData] = useState(null);
        const { podcastId } = useParams();

        useEffect(() => {
            fetchPodcast(podcastId).then((podcastData) => {
                setPodcastData({ podcastData }); 
                loadingCallback(false);
              });
          }, []);

        const props = {
            ...podcastData
        }
       
        return (
            <View {...props} />
        );
    }

    return podcastDetailsHOC;

};  

export default getPodcastDetailsHOC;