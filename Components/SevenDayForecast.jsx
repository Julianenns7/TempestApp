import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView} from 'react-native';
import { WeatherData } from '../weatherData.jsx';
import Search  from './search.jsx';


import tw from 'twrnc';

const SevenDayForecast = () =>{

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
const day1 = weatherData?.[0];
const day2 = weatherData?.[1];
const day3 = weatherData?.[2];
const day4 = weatherData?.[3];
const day5 = weatherData?.[4];
const day6 = weatherData?.[5];
const day7 = weatherData?.[6];

const dayNames = [ "For indexing purposes", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const weatherDataStyling = tw`text-xl text-white`;
const degreeSymbol =   '\u00B0' + 'C';

return (
    
        <ScrollView>
            <View style={tw`m-4 text-center flex-1`}>
                <Text style={tw`text-3xl text-center font-bold text-sky-500 `}>Tempest</Text>
            </View>
            <View>
                <Search onSearch={fetchWeather} />
                {city_name && country_code && (
                    <Text style={tw`font-bold text-2xl text-sky-500 m-6`}>{city_name}, {country_code}</Text>
                )}
            </View>
                <View style={tw`m-4 flex  items-center text-xl`}>
            
                {day1 && (
                    <>
                        <Text style={weatherDataStyling}>{dayNames[new Date(day1.datetime).getDay() + 1]}: {day1.datetime}</Text>
                        <Text style={weatherDataStyling}> {day1.weather.description} </Text>
                        <Text style={weatherDataStyling}> Temp: {day1.temp}{degreeSymbol} </Text>
                        <Text style={weatherDataStyling}> High: {day1.high_temp}{degreeSymbol} </Text>
                        <Text style={weatherDataStyling}> Low: {day1.low_temp}{degreeSymbol} </Text>
                    </>
                )}
                </View>
                <View style={tw`m-4 flex  items-center`}>
                {day2 && (
                    <>
                    
                        <Text style={weatherDataStyling}>{dayNames[new Date(day2.datetime).getDay() + 1]}: {day2.datetime}</Text>
                        <Text style={weatherDataStyling}> {day2.weather.description} </Text>
                        <Text style={weatherDataStyling}> Temp: {day2.temp}{degreeSymbol} </Text>
                        <Text style={weatherDataStyling}> High: {day2.high_temp}{degreeSymbol} </Text>
                        <Text style={weatherDataStyling}> Low: {day2.low_temp}{degreeSymbol} </Text>
                    </>
                )}
                </View>
                <View style={tw`m-4 flex  items-center`}>
                {day3 && (
                    <>
                        <Text style={weatherDataStyling}>{dayNames[new Date(day3.datetime).getDay() + 1]}: {day3.datetime}</Text>
                        <Text style={weatherDataStyling} > {day3.weather.description} </Text>
                        <Text style={weatherDataStyling}> Temp: {day3.temp}{degreeSymbol} </Text>
                        <Text style={weatherDataStyling}> High: {day3.high_temp}{degreeSymbol} </Text>
                        <Text style={weatherDataStyling}> Low: {day3.low_temp}{degreeSymbol} </Text>
                    </>
                )}
                </View>
                <View style={tw`m-4 flex  items-center`}>
                {day4 && (
                    <>
                        <Text style={weatherDataStyling}>{dayNames[new Date(day4.datetime).getDay() + 1]}: {day4.datetime}</Text>
                        <Text style={weatherDataStyling}> {day4.weather.description} </Text>
                        <Text style={weatherDataStyling}> Temp: {day4.temp}{degreeSymbol} </Text>
                        <Text style={weatherDataStyling}> High: {day4.high_temp}{degreeSymbol}  </Text>
                        <Text style={weatherDataStyling}> Low: {day4.low_temp}{degreeSymbol}  </Text>
                    </>
                )}
                </View>
                <View style={tw`m-4 flex  items-center`}>
                {day5 && (
                    <>
                        <Text style={weatherDataStyling}>{dayNames[new Date(day5.datetime).getDay() + 1]}: {day5.datetime}</Text>
                        <Text style={weatherDataStyling}> {day5.weather.description} </Text>
                        <Text style={weatherDataStyling}> Temp: {day5.temp}{degreeSymbol}  </Text>
                        <Text style={weatherDataStyling}> High: {day5.high_temp}{degreeSymbol}  </Text>
                        <Text style={weatherDataStyling}> Low: {day5.low_temp}{degreeSymbol}  </Text>
                    </>
                )}
                </View>
                <View style={tw`m-4 flex  items-center`}>
                {day6 && (
                    <>
                        <Text style={weatherDataStyling}>{dayNames[new Date(day6.datetime).getDay() + 1]}: {day6.datetime}</Text>
                        <Text style={weatherDataStyling}> {day6.weather.description} </Text>
                        <Text style={weatherDataStyling}> Temp: {day6.temp}{degreeSymbol}  </Text>
                        <Text style={weatherDataStyling}> High: {day6.high_temp}{degreeSymbol}  </Text>
                        <Text style={weatherDataStyling}> Low: {day6.low_temp}{degreeSymbol}  </Text>
                    </>
                )}
                </View>
                <View style={tw`m-4 flex  items-center text-xl`}>
                {day7 && (
                    <>
                        <Text style={weatherDataStyling}>{dayNames[new Date(day7.datetime).getDay() + 1]}: {day7.datetime}</Text>
                        <Text style={weatherDataStyling}> {day7.weather.description} </Text>
                        <Text style={weatherDataStyling}> Temp: {day7.temp}{degreeSymbol}  </Text>
                        <Text style={weatherDataStyling}> High: {day7.high_temp}{degreeSymbol}  </Text>
                        <Text style={weatherDataStyling}> Low: {day7.low_temp}{degreeSymbol}  </Text>
                    </>
                )}
                </View>
                
        </ScrollView>
     
    );
};

export default SevenDayForecast;