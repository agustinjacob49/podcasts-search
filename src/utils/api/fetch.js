import { transformPodcasts } from "../transform/podcasts";

export const fetchPodcasts = () => {
    try {
        let isExpiredDate = false;
        let isDataNotFound = false;
        const keyStoragePodcasts = 'podcast';
        const keyStoragePodcastsExpireDate = 'podcast_expire_date';

        const storagePodcastsExpireDate = localStorage.getItem(keyStoragePodcastsExpireDate);
        const actualDate = new Date();

        if(storagePodcastsExpireDate !== null){
            const expireDate = new Date(parseInt(storagePodcastsExpireDate, 0));
            isExpiredDate = actualDate > expireDate ? true : false;
        }

        const storagedPodcasts = localStorage.getItem(keyStoragePodcasts);

        isDataNotFound = storagedPodcasts === null ? true : false;

        if (isExpiredDate || isDataNotFound) {
            return fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json")
            .then((response) => response.json())
            .then((response) => {
                localStorage.setItem(keyStoragePodcastsExpireDate, JSON.stringify(new Date().setDate(actualDate.getDate() + 1)));

                const { feed : { entry } } = response;
                const podcasts = transformPodcasts(entry);
                localStorage.setItem(keyStoragePodcasts, JSON.stringify(podcasts));
                return podcasts;
            });
        } else {
            return new Promise((resolve, reject) => {
                resolve(JSON.parse(storagedPodcasts));
            });
        }
    } catch (err) {
        return new Promise().reject(err);
    }

}

