import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeDesign from './Screens/HomeDesign';
import Login from './Screens/Design/Login';
import SignUp from './Screens/Design/SignUp';
import BarberDesign from './Screens/Design/BarberDesign';
import BarberWelcome from './Screens/Design/BarberWelcome';
import Barberdetail from './Screens/Design/Barberdetail';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name="HomeDesign" component={HomeDesign}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Login" component={Login}/> */}
        <Stack.Screen name="BarberDesign" component={BarberDesign}/>
        <Stack.Screen name="BarberWelcome" component={BarberWelcome}/>
        <Stack.Screen name="Barberdetail" component={Barberdetail}/>
  
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})