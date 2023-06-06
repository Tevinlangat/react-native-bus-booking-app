import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import StartPage from '../screens/StartPage';
import BusFinderPage from '../screens/BusFinderPage';
import BookingPage from '../screens/BookingPage';



const BookingStack=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StartPage" component={StartPage} options={{headerShown:false}} />
      <Stack.Screen name="BookingPage" component={BookingPage} options={{title:'Select A Seat'}} />
      <Stack.Screen name="BusFinderPage" component={BusFinderPage} options={{title:'Find a Trip'}} />
      
    </Stack.Navigator>
  );
}

export default BookingStack