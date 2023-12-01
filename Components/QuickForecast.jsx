import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView} from 'react-native';
import { WeatherData } from '../weatherData.jsx';
import Search  from '../search.jsx';
import { StyleSheet } from 'react-native';
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

       const styles = StyleSheet.create({
        body: {
            width: 475,
            backgroundColor: 'darkblue',
            alignContent: 'center',
        },
        heading: {
            backgroundColor: 'blue',
            color: 'white',
            borderBottomWidth: 6,
            lineHeight: 40,
            textAlign: 'center',
            marginBottom: 20,
        },
        search: {
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            backgroundColor: '#0b263d',
            height: 200,
        },
        today: {
            textAlign: 'center',
            color: 'white',
            borderBottomWidth: 2,
        }
       });

    return (
        <SafeAreaView style={styles.body}>
            <ScrollView>
                <View style={styles.heading}>
                    <Text>Tempest</Text>
                </View>
                <View style={styles.search}>
                    <Search onSearch={fetchWeather} />
                    {city_name && country_code && (
                        <Text>Location: {city_name}, {country_code}</Text>
                    )}
                </View>
                <View style={styles.today}>
                    {today && (
                        <>
                            <Text>Today: {today.datetime}</Text>
                            <Text> {today.description} </Text>
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