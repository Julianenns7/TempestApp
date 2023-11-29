import React, { useState } from 'react';
import { View, Text, SafeAreaView} from 'react-native';
import { WeatherData } from '../weatherData.jsx';
import Search  from '../search.jsx';
const DetailedForecast = () => {

   const [weatherInfo, setWeatherInfo] = useState(null);

       const fetchWeather = async (city) => {
           try {
               const data = await WeatherData(city);
               setWeatherInfo(data);
           } catch (error) {
               console.error('Error fetching weather data: ', error);
               // Handle error
           }
       };

       const { city_name, country_code, weatherData } = weatherInfo || {};
       const currentDay = weatherData?.[0];


    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Tempest</Text>
                </View>
                <View>
                    <Search onSearch={fetchWeather} />
                    {city_name && country_code && (
                        <Text>Location: {city_name}, {country_code}</Text>
                    )}
                    {currentDay && (
                        <>
                            <Text>Today: {currentDay.datetime}</Text>
                            <Text> {currentDay.description} </Text>
                            <Text> Temp: {currentDay.temp} </Text>
                            <Text> High: {currentDay.high_temp} </Text>
                            <Text> Low: {currentDay.low_temp} </Text>
                            <Text>Wind Speed: {currentDay.wind_spd}</Text>
                            <Text> Wind Direction: {currentDay.wind_cdir} </Text>
                            <Text> Precipitation: {currentDay.precip} </Text>
                            <Text> Snow: {currentDay.snow} </Text>
                            <Text> Snow Depth: {currentDay.snow_depth} </Text>
                        </>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default DetailedForecast;