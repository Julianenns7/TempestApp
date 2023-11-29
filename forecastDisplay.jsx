import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { WeatherData } from './weatherData.jsx';
import Search  from './search.jsx';
const WeatherDisplay = () => {

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
       const today = weatherData?.[0];
       const tomorrow = weatherData?.[1];


    return (
            <View>
                <Search onSearch={fetchWeather} />
                {city_name && country_code && (
                    <Text>Location: {city_name}, {country_code}</Text>
                )}
                {today && (
                    <>
                        <Text>Today: {today.datetime}</Text>
                        <Text> {today.description} </Text>
                        <Text> Temp: {today.temp} </Text>
                        <Text> High: {today.high_temp} </Text>
                        <Text> Low: {today.low_temp} </Text>
                    </>
                )}
                {tomorrow && (
                    <>
                        <Text>Tomorrow: {tomorrow.datetime}</Text>
                        <Text> {tomorrow.description} </Text>
                        <Text> Temp: {tomorrow.temp} </Text>
                        <Text> High: {tomorrow.high_temp} </Text>
                        <Text> Low: {tomorrow.low_temp} </Text>
                    </>
                )}
            </View>
        );
    };

export default WeatherDisplay;