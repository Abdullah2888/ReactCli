import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';

const PoliceScreen = () => {
    const handleLogout = async () => {
        try {
          await auth().signOut();
        } catch (error) {
          console.log(error.message);
        }
      };
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30}}>PoliceScreen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  )
}

export default PoliceScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})