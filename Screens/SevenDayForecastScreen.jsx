import{Button} from 'react-native'

function SevenDayForecatScreen({ navigation }) {

    return (

        <Button
            title="7DayForecast"
            onPress={() => navigation.navigate('7DayForecast')}
        />
    );
}

export default SevenDayForecatScreen;