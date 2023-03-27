import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import LoginScreen from './Screens/LoginScreen';
import SignUp from './Screens/SignUp';
import WelcomeScreen from './Screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

function App() { 
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Splash" options={{
          headerShown:false
        }} component={Splash} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App 