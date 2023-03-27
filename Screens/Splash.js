import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
    useEffect(()=>{ 
        setTimeout(() => {
            navigation.navigate('LoginScreen')
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