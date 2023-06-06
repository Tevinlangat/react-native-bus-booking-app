import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import About from '../screens/About';

import StartPage from '../screens/StartPage';
import BookingStack from './BookingStack';



const Tab = createBottomTabNavigator();


export default function TabNavigator () {
    return (
    
        <Tab.Navigator>
          <Tab.Screen name="Book now!" component={BookingStack} options={{headerShown:false}}/>
         
          <Tab.Screen name="About" component={About} options={{headerShown:false}}/>  
        </Tab.Navigator>
      
    );
  }