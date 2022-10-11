import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPodcast } from '../../utils/api/fetch';

const getEpisodeDetailsHOC = View => {
    
    const EpisodeDetailsHOC = ({loadingCallback}) => {

        const [episode, setEpisode] = useState(null);
        const [podcast, setPodcast] = useState(null);
        const { podcastId, episodeId } = useParams();

        useEffect(() => {
            loadingCallback(true);
            fetchPodcast(podcastId).then((podcast) => {
                const { episodes } = podcast;
                const episode = episodes[episodeId] || null;
                const { id, author, title, details, img } = podcast || {};
                setEpisode({ ...episode }); 
                setPodcast({ id, author, title, details, img  });
                loadingCallback(false);
              }).catch( (err) => {
                console.log(`Something went wrong at EpisodeDetailsHOC - ${err}`);
              })
          }, []);

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