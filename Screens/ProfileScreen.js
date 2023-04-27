import React, { useState, useEffect } from 'react';
import { View, Text, Button ,StyleSheet, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
const ProfileScreen = ({navigation}) => {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
    //         if (authUser) {
    //             firebase.firestore()
    //                 .collection('Users')
    //                 .doc(authUser.uid)
    //                 .get()
    //                 .then((doc) => {
    //                     setUser(doc.data());
    //                 })
    //                 .catch((error) => {
    //                     console.log('Error getting user data:', error);
    //                 });
    //         } else {
    //             setUser(null);
    //         }
    //     });

    //     return () => {
    //         unsubscribe();
    //     };
    // }, []);


    return (
        <View>
            {user ? (
                <View>
                    <Text>{user.name}</Text>
                    <Text>{user.email}</Text>
                    
                </View>
            ) : (
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        navigation.navigate('LoginScreen')
                    }}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        navigation.navigate('SignUp')
                    }}>
                        <Text style={styles.buttonText}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})
export default ProfileScreen;
