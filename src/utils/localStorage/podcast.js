const KEY_STORAGE_PODCAST = 'podcast';
const KEY_STORAGE_PODCAST_EXPIRE_DATE = 'podcast_expire_date';

const KEY_STORAGE_PODCASTS_DETAIL = 'podcast_detail';

export const getLocalStoragePodcastsData = () => {
    let isExpiredDate = false;
    let isDataNotFound = false;

    const storagePodcastsExpireDate = localStorage.getItem(KEY_STORAGE_PODCAST_EXPIRE_DATE);
    const actualDate = new Date();

    if(storagePodcastsExpireDate !== null){
        const expireDate = new Date(parseInt(storagePodcastsExpireDate, 0));
        isExpiredDate = actualDate > expireDate ? true : false;
    } else {
        isExpiredDate = true;
    }

    const storagedPodcasts = localStorage.getItem(KEY_STORAGE_PODCAST);

    isDataNotFound = storagedPodcasts === null ? true : false;


    return {
        storagePodcastsExpireDate,
        storagedPodcasts,
        isNotValid: isExpiredDate || isDataNotFound ? true : false,
    }
}

export const saveLocalStoragePodcastsData = (podcasts) => {
    const actualDate = new Date();

    localStorage.setItem(KEY_STORAGE_PODCAST_EXPIRE_DATE, JSON.stringify(new Date().setDate(actualDate.getDate() + 1)));

    localStorage.setItem(KEY_STORAGE_PODCAST, JSON.stringify(podcasts));

   return true;
}

export const searchLocalStoragePodcastsDetailData = (podcastId) => {
    let isExpiredDate = false;
    let isDataNotFound = false;

    const storagedPodcasts = localStorage.getItem(KEY_STORAGE_PODCASTS_DETAIL);

    const data = JSON.parse(storagedPodcasts)[0][podcastId];
    const { expireDate } = data || {};

    const actualDate = new Date();

    if(expireDate !== null){
        const expireDateParsed = new Date(parseInt(expireDate, 0));
        isExpiredDate = actualDate > expireDateParsed ? true : false;
    } else {
        isExpiredDate = true;
    }

    isDataNotFound = data === null ? true : false;

    return {
        ...data,
        isNotValid: isExpiredDate || isDataNotFound ? true : false,
    }
}

export const saveLocalStoragePodcastData = (podcast) => {

    const storagedPodcasts = localStorage.getItem(KEY_STORAGE_PODCASTS_DETAIL);
    const { id } = podcast;

    const actualDate = new Date();

    const dataToStorage = {
        ...storagedPodcasts,
    }

    dataToStorage[id] = {
        ...podcast,
        expireDate: new Date().setDate(actualDate.getDate() + 1),
    };

    localStorage.setItem(KEY_STORAGE_PODCASTS_DETAIL, JSON.stringify([dataToStorage]));

   return true;
}