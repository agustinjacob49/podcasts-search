const KEY_STORAGE_PODCAST = 'podcast';
const KEY_STORAGE_PODCAST_EXPIRE_DATE = 'podcast_expire_date';

const KEY_STORAGE_PODCASTS_DETAIL = 'podcast_detail';

export const getLocalStoragePodcastsData = () => {
    try{
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
    catch(err){
        console.log(`An error has found in getLocalStoragePodcastsData ${err}`);
    }
}

export const saveLocalStoragePodcastsData = (podcasts) => {
    try{
        const actualDate = new Date();

        localStorage.setItem(KEY_STORAGE_PODCAST_EXPIRE_DATE, JSON.stringify(new Date().setDate(actualDate.getDate() + 1)));
    
        localStorage.setItem(KEY_STORAGE_PODCAST, JSON.stringify(podcasts));
    
       return true;
    } catch (err){
        console.log(`An error has found in saveLocalStoragePodcastsData ${err}`);
    }
}

export const searchLocalStoragePodcastsDetailData = (podcastId) => {
    try{
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
    } catch (err){
        console.log(`An error has found in searchLocalStoragePodcastsDetailData ${err}`);
    }
}

export const saveLocalStoragePodcastData = (podcast) => {
    try{

        const storagedPodcasts = localStorage.getItem(KEY_STORAGE_PODCASTS_DETAIL);

        const parsedData = JSON.parse(storagedPodcasts);

        if (parsedData) {

        } else { 
            
        }
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
    } catch (err){
        console.log(`An error has found in saveLocalStoragePodcastData ${err}`);
    }
}