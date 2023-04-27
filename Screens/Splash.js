import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect , useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Auth from '@react-native-firebase/auth';

const Splash = ({navigation}) => {

    useEffect(()=>{ 
        setTimeout(() => {
          Auth().onAuthStateChanged(function (user) {
            const routeName = user !== null ? "WelcomeScreen":"LoginScreen"
            navigation.navigate(routeName);
          });    
          // navigation.navigate('SignUp');
        }, 2000)
    },[])
  return (
    <View style={styles.txt}>
      <Text style={{fontSize:20 , fontWeight:'800' , color:'black'}}>Firebase</Text>
      <Text style={{fontSize:20 , fontWeight:'800' , color:'red'}}>Social App</Text>
    </View>
  ) 
}

const styles = StyleSheet.create({
    txt:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Splash