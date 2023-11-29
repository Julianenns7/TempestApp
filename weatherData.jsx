import axios from 'axios';

const API_KEY = '59fc2264c92f4966b39db4ad7ca05582';
const API_URL = 'https://api.weatherbit.io/v2.0/forecast/daily';

const WeatherData = async (city) => {
    try {
        const response = await axios.get(`${API_URL}?city=${city}&key=${API_KEY}`);
        const { city_name, country_code, data } = response.data;
        return { city_name, country_code, weatherData: data };

    } catch (error){
        console.error('Error fetching data: ', error);
        throw error;

    }

};

export { WeatherData };
