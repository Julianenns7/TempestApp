import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import QuickScreen from './Screens/QuickScreen';
import DetailedScreen from './Screens/DetailedScreen';
import SevenDayForecast from './Components/SevenDayForecast';
=======
import QuickWeather from './Components/QuickForecast';
import DetailedForecast from './Components/DetailedForecast';
import SevenDayForecast from './Components/SevenDayForecast';

>>>>>>> 1680b47db94f4377504f1a4a499604610ed46e46
 function App() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
          <Stack.Navigator>
<<<<<<< HEAD
            <Stack.Screen name="Quick" component={QuickScreen} />
            <Stack.Screen name="Detailed" component={DetailedScreen} />
=======
            <Stack.Screen name="Quick" component={QuickWeather} />
            <Stack.Screen name="Detailed" component={DetailedForecast} />
>>>>>>> 1680b47db94f4377504f1a4a499604610ed46e46
            <Stack.Screen name="7DayForecast" component={SevenDayForecast} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}
export default App;





