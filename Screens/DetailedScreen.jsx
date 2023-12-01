import{Button} from 'react-native'

function DetailedScreen({ navigation }) {

    return (

        <Button
            title="Detailed"
            onPress={() => navigation.navigate('Detailed')}
        />
    );
}

export default DetailedScreen;