import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';


const FireStoreLogin = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        firestore()
            .collection('Users')
            .add({
                email: email,
                password: password,
            })
            .then(() => {
                // console.log('User added!');
                navigation.navigate('FireStoreHome')
            })
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>FireStoreLogin Login Screen</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('FireStoreDisplay')
                }}>
                    <Text style={styles.buttonText}>displayscreen</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('ProfileScreen')
                }}>
                    <Text style={styles.buttonText}>ProfileScreen</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('FireStoreHome')
                }}>
                    <Text style={styles.buttonText}>Homescreen</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: 'black',
    },
    input: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
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
});

export default FireStoreLogin;