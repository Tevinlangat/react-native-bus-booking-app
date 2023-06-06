import { View,ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


import TabNavigator from './TabNavigator';

import AuthStack from './AuthStack' 



const Stack = createNativeStackNavigator()

function HomeStack() {

    const {isLoading,userToken} = useContext(AuthContext)

  if (isLoading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size={'large'} />
    </View> 

    )
    
  }

    return (
      
        <Stack.Navigator>
         {userToken !== null ? 
         <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown:false}}/>
         :
         <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown:false}}/>
         }
          
        </Stack.Navigator>
      
    );
  }


// export default HomeStack
export default HomeStack