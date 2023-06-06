import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import Login from '../screens/Login'
import RegisterPage from '../screens/RegisterPage'



const Stack = createNativeStackNavigator()

function HomeStack() {

  const {isLoading,userToken} = useContext(AuthContext)
    return (
      
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
          <Stack.Screen name="RegisterPage" component={RegisterPage} options={{headerShown:false}}/>
        </Stack.Navigator>
      
    );
  }


// export default HomeStack
export default HomeStack