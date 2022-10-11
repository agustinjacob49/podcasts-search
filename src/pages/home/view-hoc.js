import React, { useEffect, useState } from 'react';
import { fetchPodcasts } from '../../utils/api/fetch';

const getHomeHOC = View => {
    
    const HomeHOC = ({loadingCallback}) => {
        const [podcasts, setPodcastsData] = useState(null);

        useEffect(() => {
            fetchPodcasts().then((podcasts) => {
                setPodcastsData({ podcasts }); 
                loadingCallback(false);
              }).catch( (err) => {
                console.log(`Something went wrong at HomeHOC - ${err}`);
              });
          }, []);

        const props = {
            ...podcasts
        }

        return (
            <View {...props} />
        );
    }

    return HomeHOC;

};  

export default getHomeHOC;