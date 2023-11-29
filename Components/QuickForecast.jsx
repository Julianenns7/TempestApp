import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView} from 'react-native';
import { WeatherData } from '../weatherData.jsx';
import Search  from '../search.jsx';
const QuickWeather = () => {

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
                </View>
                <View>
                    {today && (
                        <>
                            <Text>Today: {today.datetime}</Text>
<<<<<<< HEAD
                            <Text> {today.weather.description} </Text>
=======
                            <Text> {today.description} </Text>
>>>>>>> 1680b47db94f4377504f1a4a499604610ed46e46
                            <Text> Temp: {today.temp} </Text>
                            <Text> High: {today.high_temp} </Text>
                            <Text> Low: {today.low_temp} </Text>
                        </>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default QuickWeather;