import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { WeatherData } from '../weatherData.jsx';
import Search  from '../search.jsx';
import { StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
    Heading: {
        fontSize: 2.5,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    search: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: '#0b263d',
        height: 200,
    },
    forecast: {
        textAlign: 'center',
        margin: 0.01,
        paddingBottom: 2.5,
    },
    background : {
        backgroundColor: 'black',
    },
});


return (
    <SafeAreaView style={styles.background}>
        <ScrollView>
            <View style={styles.Heading}>
                <Text>Tempest</Text>
            </View>
            <View style={styles.search}>
                <Search onSearch={fetchWeather} />
                {city_name && country_code && (
                    <Text>Location: {city_name}, {country_code}</Text>
                )}
            </View>
            <View style={styles.forecast}>
                {day1 && (
                    <>
                        <Text>{day1.datetime}</Text>
                        <Text> {day1.description} </Text>
                        <Text> Temp: {day1.temp} </Text>
                        <Text> High: {day1.high_temp} </Text>
                        <Text> Low: {day1.low_temp} </Text>
                    </>
                )}
                {day2 && (
                    <>
                        <Text>{day2.datetime}</Text>
                        <Text> {day2.description} </Text>
                        <Text> Temp: {day2.temp} </Text>
                        <Text> High: {day2.high_temp} </Text>
                        <Text> Low: {day2.low_temp} </Text>
                    </>
                )}
                {day3 && (
                    <>
                        <Text>{day3.datetime}</Text>
                        <Text> {day3.description} </Text>
                        <Text> Temp: {day3.temp} </Text>
                        <Text> High: {day3.high_temp} </Text>
                        <Text> Low: {day3.low_temp} </Text>
                    </>
                )}
                {day4 && (
                    <>
                        <Text>{day4.datetime}</Text>
                        <Text> {day4.description} </Text>
                        <Text> Temp: {day4.temp} </Text>
                        <Text> High: {day4.high_temp} </Text>
                        <Text> Low: {day4.low_temp} </Text>
                    </>
                )}
                {day5 && (
                    <>
                        <Text>{day5.datetime}</Text>
                        <Text> {day5.description} </Text>
                        <Text> Temp: {day5.temp} </Text>
                        <Text> High: {day5.high_temp} </Text>
                        <Text> Low: {day5.low_temp} </Text>
                    </>
                )}
                {day6 && (
                    <>
                        <Text>{day6.datetime}</Text>
                        <Text> {day6.description} </Text>
                        <Text> Temp: {day6.temp} </Text>
                        <Text> High: {day6.high_temp} </Text>
                        <Text> Low: {day6.low_temp} </Text>
                    </>
                )}
                {day7 && (
                    <>
                        <Text>{day7.datetime}</Text>
                        <Text> {day7.description} </Text>
                        <Text> Temp: {day7.temp} </Text>
                        <Text> High: {day7.high_temp} </Text>
                        <Text> Low: {day7.low_temp} </Text>
                    </>
                )}
            </View>
        </ScrollView>
     </SafeAreaView>
    );
};

export default SevenDayForecast;