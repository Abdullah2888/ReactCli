import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import FireStoreLogin from './Screens/FireStoreLogin';
import FireStoreHome from './Screens/FireStoreHome';
import FireStoreDisplay from './Screens/FireStoreDisplay';

const Stack = createNativeStackNavigator();


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash} />
        <Stack.Screen name="FireStoreLogin" component={FireStoreLogin} />
        <Stack.Screen name="FireStoreDisplay" component={FireStoreDisplay} />
        <Stack.Screen name="FireStoreHome" component={FireStoreHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App 