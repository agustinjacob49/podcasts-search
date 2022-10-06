import { transformPodcasts } from "../transform/podcasts";
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

    const { rss : { channel: rss } } = responseRSS

    const podcastData = {
        podcastData: podcast,
        rss,
    }

    const {podcastData : { artistName : author, collectionName: title, collectionId: id }} = podcastData;
    let { podcastData : { artworkUrl600 : img} } = podcastData;
    img = img.replace("600x600", "250x250");

    const episodes = rss.item.map( (i) => {
        const episodeTitle = i["itunes:title"] || i["title"];
        const date = i["pubDate"] && new Date(i["pubDate"]).toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });

        const durationRaw = i["itunes:duration"] || 0 ;
        const src = i['enclosure']?
        i['enclosure']['url'] :
        (i['media:content']?
        i['media:content']['url'] :
          null
        );


        let durationParsed = new Date(0);
        durationParsed.setSeconds(durationRaw);
        durationParsed = durationParsed.toISOString().substring(11, 19);

        return {
            episodeTitle,
            date,
            duration: durationParsed,
            src
        }
    })
    

    const details = rss['description'] || rss["itunes:summary"];

    const podcastViewData = {
        id,
        author,
        title,
        details,
        img,
        episodes
    };

    saveLocalStoragePodcastData(podcastViewData);

    return Promise.resolve(podcastViewData);
   } else {
        return Promise.resolve(cachedData);
   }
}

