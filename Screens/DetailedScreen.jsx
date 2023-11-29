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

export default DetailedScreen;