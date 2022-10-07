import { transformPodcastData, transformPodcasts } from "../transform/podcasts";
import { saveLocalStoragePodcastsData, getLocalStoragePodcastsData, saveLocalStoragePodcastData, searchLocalStoragePodcastsDetailData } from "../localStorage/podcast";
import { XMLParser } from 'fast-xml-parser';

export const fetchPodcasts = () => {
    try {
        const { isNotValid, storagedPodcasts} = getLocalStoragePodcastsData();
    
        if (isNotValid) {
            return fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json")
            .then((response) => response.json())
            .then((response) => {
                const { feed : { entry } } = response;
                const podcasts = transformPodcasts(entry);

                saveLocalStoragePodcastsData(podcasts);
                return podcasts;
            }).catch( (err) => {
                console.log(`Error fetching podcast list - original msg:${err}`);
                return new Promise().reject(err);
            });
        } else {
            return new Promise((resolve, reject) => {
                resolve(JSON.parse(storagedPodcasts));
            });
        }
    } catch (err) {
        console.log(`Error fetching podcast list - original msg:${err}`);
        return new Promise().reject(err);
    }
};

export const fetchPodcast = async (podcastId) => {

    try {

        const cachedData = searchLocalStoragePodcastsDetailData(podcastId);

        const { isInvalid } = cachedData

        if (isInvalid) {
            const corsProxy = 'https://api.allorigins.win/get?url=';

            const responseItunes = await fetch(`${corsProxy}${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}`)}`).then((response) => response.json());

            const { results } = JSON.parse(responseItunes.contents);
            const [ podcast ] = results;

            const { feedUrl } = podcast;

            const parser = new XMLParser();
            
            const responseRSS = await fetch(`${corsProxy}${feedUrl}`).then((response) => response.text()).then((response) => parser.parse(response));

            const { rss : { channel: rss } } = responseRSS;

            const podcastData = {
                podcastData: podcast,
                rss,
            }

            const podcastViewData = transformPodcastData(podcastData, rss);

            saveLocalStoragePodcastData(podcastViewData);

            return Promise.resolve(podcastViewData);
        } else {
                return Promise.resolve(cachedData);
        }
    } catch (err) {
        console.log(`Error fetchPodcast - original msg:${err}`);
        return new Promise().reject(err);
    }
}



