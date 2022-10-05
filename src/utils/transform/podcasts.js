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