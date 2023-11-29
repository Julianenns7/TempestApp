<<<<<<< HEAD
import{Button} from 'react-native';
import DetailedForecast from '../Components/DetailedForecast';
import { SafeAreaView } from 'react-native-safe-area-context';
function DetailedScreen({ navigation }) {

    return (
        <SafeAreaView>
            <DetailedForecast />
            <Button
                title="Quick"
                onPress={() => navigation.navigate('Quick')}
            />
        </SafeAreaView>

    );
}

=======
import{Button} from 'react-native'

function DetailedScreen({ navigation }) {

    return (

        <Button
            title="Detailed"
            onPress={() => navigation.navigate('Detailed')}
        />
    );
}

>>>>>>> 1680b47db94f4377504f1a4a499604610ed46e46
export default DetailedScreen;