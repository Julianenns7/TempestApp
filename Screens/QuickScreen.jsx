import{Button} from 'react-native'

function QuickScreen({ navigation }) {

    return (

        <Button
            title="Quick"
            onPress={() => navigation.navigate('Quick')}
        />
    );
}

export default QuickScreen;