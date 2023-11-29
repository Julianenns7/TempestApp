<<<<<<< HEAD
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

=======
import{Button} from 'react-native'

function QuickScreen({ navigation }) {

    return (

        <Button
            title="Quick"
            onPress={() => navigation.navigate('Quick')}
        />
    );
}

>>>>>>> 1680b47db94f4377504f1a4a499604610ed46e46
export default QuickScreen;