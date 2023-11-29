import{Button} from 'react-native';
import QuickForecast from '../Components/QuickForecast';
import { SafeAreaView } from 'react-native-safe-area-context';

function QuickScreen({ navigation }) {

    return (
        <SafeAreaView>
            <QuickForecast />
            <Button
                title="Detailed"
                onPress={() => navigation.navigate('Detailed')}
            />

            <Button
                title="7DayForecast"
                onPress={() => navigation.navigate('7DayForecast')}
            />
        </SafeAreaView>
    );
}

export default QuickScreen;