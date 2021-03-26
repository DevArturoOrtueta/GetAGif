export const getGifs = async(category) => { //el encodeURI lo que hace es colocar + cuando hay espacios en lo recibido
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=20&api_key=0sax6MiuEqsIOzjgRErLHKAOsOj5m7Uk`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}