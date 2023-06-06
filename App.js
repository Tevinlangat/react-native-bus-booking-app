import 'react-native-gesture-handler';
import Navigator from './routes/AppStack'
import { AuthProvider } from './context/AuthContext';

import HomePage from './screens/HomePage'



const App=()=> {
  return (
    <AuthProvider>
       <Navigator/>
    </AuthProvider>
   
  //  <NavigationContainer>
  //      <Stack.Navigator>
  //      <Stack.Screen name="HomePage" component={HomePage} options={{headerShown:false}} />
  //       <Stack.Screen name="Start" component={StartPage} options={{headerShown:false}} />
  //     </Stack.Navigator>
  //  </NavigationContainer>
  );
}




export default App