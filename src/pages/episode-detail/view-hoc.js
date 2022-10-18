import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPodcast } from '../../utils/api/fetch';
import { LoaderContext } from '../../utils/context/loaderContext';

const getEpisodeDetailsHOC = View => {
    
    const EpisodeDetailsHOC = () => {

        const [episode, setEpisode] = useState(null);
        const [podcast, setPodcast] = useState(null);
        const { podcastId, episodeId } = useParams();
        const { setIsLoading } = useContext(LoaderContext);

        useEffect(() => {
            setIsLoading(true);
            fetchPodcast(podcastId).then((podcast) => {
                const { episodes } = podcast;
                const episode = (episodeId && episodes[episodeId]) || (episodes && episodes[0]) || ({ description : '' });
                const { id, author, title, details, img } = podcast || {};
                setEpisode({ ...episode }); 
                setPodcast({ id, author, title, details, img  });
                setIsLoading(false);
              }).catch( (err) => {
                console.log(`Something went wrong at EpisodeDetailsHOC - ${err}`);
              })
          }, [podcastId, episodeId, setIsLoading]);

        const props = {
            episode,
            podcast
        }

        return (
            podcast && episode && <View  {...props} />
        );
    }

    return EpisodeDetailsHOC;

};  

export default getEpisodeDetailsHOC;