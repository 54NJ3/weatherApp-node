const axios = require('axios')

const getCurrentWeather = async (lat, lon) => {
    const answer = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a4d6fe10add4cb0db30c3727ff5c5759&units=metric`);
    

    const temperature = answer.data.main.temp
    const weather = answer.data.weather[0].main
    const description = answer.data.weather[0].description


    return {
        temperature,
        weather,
        description
    }
}

module.exports = {
    getCurrentWeather
}