
import{Button, View} from 'react-native';
import SevenDayForecast from '../Components/SevenDayForecast';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../Components/customButton';
function SevenDayForecastScreen({ navigation }) {

    return (
    <SafeAreaView style={tw`flex-1 justify-between bg-slate-900 `}>
        <SevenDayForecast />
        <View style={tw`flex-row justify-center h-20 `}>
            <CustomButton
                title="Detailed"
                onPress={() => navigation.navigate('Detailed')}
                
                
                text="Detailed"
            />

            <CustomButton
                title="7DayForecast"
                onPress={() => navigation.navigate('7DayForecast')}
                text="Seven Day Forecast"
                
            />
            <CustomButton
            
            title="Quick"
            onPress={() => navigation.navigate('Quick')}
            text="Quick"
            />
        </View>
    </SafeAreaView>
    );
}

export default SevenDayForecastScreen;
