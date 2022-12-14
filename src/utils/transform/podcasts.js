const transformEpisode = (i) => {

  try {
    const episodeTitle = (i["itunes:title"] &&  i["itunes:title"]["_text"]) || (i["title"]["_text"]) || "";
    const date = i["pubDate"]["_text"] && new Date(i["pubDate"]["_text"]).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    const { description : descriptionObject } = i;
    const description =  descriptionObject["_cdata"] || descriptionObject["_text"] || "";

    const durationRaw = (i["itunes:duration"] && i["itunes:duration"]["_text"]) || null;
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
    const src = (i['enclosure'] && i['enclosure']["_attributes"] && i['enclosure']["_attributes"]['url']) || "";

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

    const episodes =  (Array.isArray(rss.item) && rss.item.map(transformEpisode)) || [rss.item].map(transformEpisode)
    
    let details = (rss['description'] && rss['description']['_text']) || (rss['description'] && rss['description']['_cdata'])||(rss['itunes:summary'] && rss['itunes:summary']['_text']) || "";

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