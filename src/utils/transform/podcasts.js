const transformEpisode = (i) => {

  try {
    const episodeTitle = i["itunes:title"] || i["title"];
    const date = i["pubDate"] && new Date(i["pubDate"]).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    let { description = "" } = i;

    try {
        description = description.replace(/(\\\r\\\n|\\n|\\r)/gm,"");
        description = description.replace('\'', '');
        description = decodeURI(description);
    }catch (err){
        console.log(`Error in transformEpisode ${err}`);
        console.log(description);
        console.log(err);
    }
  

    const durationRaw = i["itunes:duration"] || null ;
    let durationParsed = new Date(0);
    if (durationRaw){
        if (typeof(durationRaw) === 'string' && durationRaw.includes(":")){
            durationParsed = durationRaw
        } else {
            durationParsed.setSeconds(durationRaw);
            durationParsed = durationParsed.toISOString().substring(11, 19);
        }
    } else {
        durationParsed = durationRaw || 0;
    }
    const src = i['enclosure']?
    i['enclosure']['url'] :
    (i['media:content']?
    i['media:content']['url'] :
      null
    );

    return {
        episodeTitle,
        date,
        duration: durationParsed,
        src,
        description,
    };
  }catch (err) {
    console.log(`Error in transformEpisode ${err}`);
  }
};

export const transformPodcasts = (podcasts) => {
    return podcasts.map( podcast => {
        const {title : { label : title} } = podcast;
        const { label: author } = podcast["im:artist"];
        const image = podcast['im:image'];
        const [ , , img ] = image;
        const { label: cover } = img
        const { id : { attributes } } = podcast;
        const id = attributes["im:id"];

        return {
          id,
          title,
          cover,
          author,
        };
      });
};

export const transformPodcastData = (podcastData, rss) => {
  try {

    const {podcastData : { artistName : author, collectionName: title, collectionId: id }} = podcastData;
    let { podcastData : { artworkUrl600 : img} } = podcastData;
    img = img.replace("600x600", "250x250");

    const episodes = rss.item.map(transformEpisode);
    
    let details = rss['description'] || rss["itunes:summary"];

    try {
        details = details.replace(/(\\\r\\\n|\\n|\\r)/gm,"");
        details = details.replace('\'', '');
        details = decodeURI(details);
    }catch (err){
        console.log(details);
        console.log(err);
        details = '';
    }

    return {
        id,
        author,
        title,
        details,
        img,
        episodes
    };
  }catch(err){
    console.log(`Error in transformPodcastData ${err}`);
  }
}