import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

import HomePage from '../screens/HomePage'
import HomeStack from './HomeStackNavigation';



const Stack = createNativeStackNavigator()

function AppStack() {



    return (
      <NavigationContainer>
        <Stack.Navigator>
             <Stack.Screen name="Home" component={HomePage}  options={{headerShown:false}}/>
        <Stack.Screen name="HomeStack" component={HomeStack} options={{headerShown:false}}/>
        </Stack.Navigator>
       
      </NavigationContainer>
    );
  }


// export default HomeStack
export default AppStack