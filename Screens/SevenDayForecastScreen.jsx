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