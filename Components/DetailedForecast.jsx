import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView} from 'react-native';
import { WeatherData } from '../weatherData.jsx';
import Search  from './search.jsx';
import tw from 'twrnc';
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

       const weatherDataStyling = tw`text-xl text-white`;
       const degreeSymbol =   '\u00B0' + 'C';
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={tw`m-4 text-center flex-1`}>
                    <Text style={tw`text-3xl text-center font-bold text-sky-500 `}>Tempest</Text>
                </View>
                <View>
                    <Search onSearch={fetchWeather} />
                </View>
                <View  style={tw`m-6 `}>
                    {city_name && country_code && (
                        <Text style={tw`font-bold text-2xl text-sky-500 `}>{city_name}, {country_code}</Text>
                    )}
                    <View style={tw`m-4 flex  items-center`}>
                    {currentDay && (
                        <>
                            <Text style={weatherDataStyling}>Today: {currentDay.datetime}</Text>
                            <Text style={weatherDataStyling}> {currentDay.weather.description} </Text>
                            <Text style={weatherDataStyling}> Temp: {currentDay.temp}{degreeSymbol} </Text>
                            <Text style={weatherDataStyling}> High: {currentDay.high_temp}{degreeSymbol} </Text>
                            <Text style={weatherDataStyling}> Low: {currentDay.low_temp}{degreeSymbol} </Text>
                            <Text style={weatherDataStyling}>Wind Speed: {currentDay.wind_spd} m/s</Text>
                            <Text style={weatherDataStyling}> Wind Direction: {currentDay.wind_cdir} </Text>
                            <Text style={weatherDataStyling}> Precipitation: {currentDay.precip} mm </Text>
                            <Text style={weatherDataStyling}> Snow: {currentDay.snow} mm </Text>
                            <Text style={weatherDataStyling}> Snow Depth: {currentDay.snow_depth} mm</Text>
                        </>
                    )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default DetailedForecast;