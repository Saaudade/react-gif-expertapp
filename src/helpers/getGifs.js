export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=yz7LN9fevsWEZ1QtluRMWV3pEsv0pkPT`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(image => {
        return {
            id: image.id,
            title: image.title,
            url: image.images?.downsized_medium.url,
        }
    })

    return gifs;
};