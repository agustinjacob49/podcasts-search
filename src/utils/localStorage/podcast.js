const KEY_STORAGE_PODCAST = 'podcast';
const KEY_STORAGE_PODCAST_EXPIRE_DATE = 'podcast_expire_date';

const KEY_STORAGE_PODCASTS_DETAIL = 'podcast_detail';

export const getLocalStoragePodcastsData = () => {
    let isExpiredDate = false;
    let isDataNotFound = false;

    const storagePodcastsExpireDate = localStorage.getItem(KEY_STORAGE_PODCAST_EXPIRE_DATE);
    const actualDate = new Date();

    if(!!storagePodcastsExpireDate){
        const expireDate = new Date(parseInt(storagePodcastsExpireDate, 0));
        isExpiredDate = actualDate > expireDate ? true : false;
    } else {
        isExpiredDate = true;
    }

    const storagedPodcasts = localStorage.getItem(KEY_STORAGE_PODCAST);

    isDataNotFound = !!storagedPodcasts ? false : true;

    const isNotValid = isExpiredDate || isDataNotFound ? true : false;

    return {
        storagePodcastsExpireDate,
        storagedPodcasts,
        isNotValid,
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

    const parsedData = JSON.parse(storagedPodcasts);

    const data = parsedData && parsedData[0];
    const podcast = data && data[podcastId];

    const { expireDate } = podcast || {};

    const actualDate = new Date();

    if(!!expireDate){
        const expireDateParsed = new Date(parseInt(expireDate, 0));
        isExpiredDate = actualDate > expireDateParsed ? true : false;
    } else {
        isExpiredDate = true;
    }

    isDataNotFound = !!podcast ? false : true;

    const isInvalid = isExpiredDate || isDataNotFound ? true : false;

    return {
        ...podcast,
        isInvalid,
    }
}

export const saveLocalStoragePodcastData = (podcast) => {

    const storagedPodcasts = localStorage.getItem(KEY_STORAGE_PODCASTS_DETAIL);

    const parsedData = JSON.parse(storagedPodcasts);
    const podcasts = parsedData && parsedData[0];

    const { id } = podcast;

    const actualDate = new Date();

    const dataToStorage = {
        ...podcasts,
    }

    dataToStorage[id] = {
        ...podcast,
        expireDate: new Date().setDate(actualDate.getDate() + 1),
    };

    localStorage.setItem(KEY_STORAGE_PODCASTS_DETAIL, JSON.stringify([dataToStorage]));

   return true;
}