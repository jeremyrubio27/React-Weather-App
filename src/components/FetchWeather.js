import axios from 'axios'


const URL = 'https://api.openweathermap.org/data/2.5/find'
const API_KEY = "9d529783ec299d95ced40f6e1dfd6478"

const FetchWeather = async (query) => {

    const {data} = await axios.get( URL , {
        params : {
            q: query,
            units: 'metric',
            appid: API_KEY,
        }
    })

    return data
}

export default FetchWeather 