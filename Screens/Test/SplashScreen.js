import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async user => {
      if (user) {
        const userRef = firestore().collection('users').doc(user.uid);
        const userDoc = await userRef.get();
        if (userDoc.exists) {
          const { department } = userDoc.data();
          switch (department) {
            case 'oic':
              navigation.navigate('OicScreen');
              break;
            case 'police':
              navigation.navigate('PoliceScreen');
              break;
            case 'complaint':
              navigation.navigate('ComplaintScreen');
              break;
            default:
              console.log('Invalid department');
          }
        } else {
          console.log('User document not found');
        }
      } else {
        navigation.navigate('TestLogin');
      }
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
