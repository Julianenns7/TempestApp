import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import QuickScreen from './Screens/QuickScreen';
import DetailedScreen from './Screens/DetailedScreen';
import SevenDayForecastScreen from './Screens/SevenDayForecastScreen';


 function App() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Quick" component={QuickScreen} />
            <Stack.Screen name="Detailed" component={DetailedScreen} />
            <Stack.Screen name="7DayForecast" component={SevenDayForecastScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}
export default App;





