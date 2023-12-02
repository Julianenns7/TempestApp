import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView} from 'react-native';
import { WeatherData } from '../weatherData.jsx';
import Search  from './search.jsx';
import tw from 'twrnc';
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

       const weatherDataStyling = tw`text-xl text-white`;
       const degreeSymbol =   '\u00B0' + 'C';

    return (
        <SafeAreaView style={tw``}>
            <ScrollView>
                <View style={tw`m-4 text-center flex-1`}>
                    <Text style={tw`text-3xl text-center font-bold text-sky-500 `}>Tempest</Text>
                </View>
                <View style={tw``}>
                    <Search onSearch={fetchWeather} />
                    
                </View>
                <View style={tw`m-6 `}>
                {city_name && country_code && (
                        <Text style={tw`font-bold text-2xl text-sky-500`}>{city_name}, {country_code}</Text>
                        
                    )}
                       
                </View>
                <View style={tw`m-4 flex  items-center`}>
                    {today && (
                        <>
                            <Text style={[weatherDataStyling, tw`text-2xl flex font-bold `]}>Today: {today.datetime}</Text>
                            <Text style={weatherDataStyling}> {today.weather.description} </Text>
                            <Text style={weatherDataStyling}> Temp: {today.temp}{degreeSymbol} </Text>
                            <Text style={weatherDataStyling}> High: {today.high_temp}{degreeSymbol} </Text>
                            <Text style={weatherDataStyling}> Low: {today.low_temp}{degreeSymbol} </Text>
                        </>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default QuickWeather;