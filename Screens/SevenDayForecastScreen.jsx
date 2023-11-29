<<<<<<< HEAD
import{Button, SafeAreaView} from 'react-native';
import SevenDayForecast from '../Components/SevenDayForecast';
function SevenDayForecastScreen({ navigation }) {

    return (
        <SafeAreaView>
            <SevenDayForecast/>
            <Button
                title="7DayForecast"
                onPress={() => navigation.navigate('7DayForecast')}
            />
        </SafeAreaView>
    );
}

export default SevenDayForecastScreen;
=======
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
>>>>>>> 1680b47db94f4377504f1a4a499604610ed46e46
