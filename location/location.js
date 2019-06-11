const axios = require('axios');

const getLocationInformation = async (location) => {

        const encodedUrl = encodeURI(location)

        const instance = axios.create({
            baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
            headers: {'X-RapidAPI-Key': '989146fdb6msh84b518237037a9ep1585edjsn03a3dc6031a9'}
        });

        const answer = await instance.get();

        if(answer.data.Results.length === 0){
            throw new Error(`There is not result for ${location}`)
        }
        
        const data = answer.data.Results[0];
        const name = data.name;
        const type = data.type;
        const lat  = data.lat;
        const lon  = data.lon

        return {
            name,
            type,
            lat,
            lon
        }
}

module.exports = {
    getLocationInformation
}