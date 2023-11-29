import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuickWeather from './Components/QuickForecast';
import DetailedForecast from './Components/DetailedForecast';
import SevenDayForecast from './Components/SevenDayForecast';

 function App() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Quick" component={QuickWeather} />
            <Stack.Screen name="Detailed" component={DetailedForecast} />
            <Stack.Screen name="7DayForecast" component={SevenDayForecast} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}
export default App;





