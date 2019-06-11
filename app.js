const command = require('./config/yargs').argv
const location = require('./location/location')
const weatherInfo = require('./config/weather')


const getInfo = async (locationName) => {
    try {
        const {name,type,lat,lon} = await location.getLocationInformation(locationName)
        const {temperature,weather,description} = await weatherInfo.getCurrentWeather(lat,lon)

        console.log(`${type} : ${name}`);
        console.log(`lat : ${lat}`);
        console.log(`lon : ${lon}`);
        console.log(`temperature : ${temperature} °C`);
        console.log(`weather : ${weather}`);
        console.log(`weather's description : ${description}`);

    }catch (e){
        console.log(e)
    }
}

getInfo(command.location)

/*
location.getLocationInformation(command.location)
.then(answer => {
    let {name,type,lat,lon} = answer

    weather.getCurrentWeather(lat,lon)
    .then(answer => {

        console.log(`${type} : ${name}`);
        console.log(`lat : ${lat}`);
        console.log(`lon : ${lon}`);
        console.log(`temperature : ${answer.temperature}`);
        console.log(`weather : ${answer.weather}`);
        console.log(`weather's description : ${answer.description}`);
    })
    .catch(error => console.log(error))
})
.catch(error => console.log(error))
*/