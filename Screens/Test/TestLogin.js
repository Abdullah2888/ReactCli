import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const TestLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const authCredential = await auth().signInWithEmailAndPassword(email, password);
            const user = authCredential.user;
            const userRef = firestore().collection('users').doc(user.uid);
            const userDoc = await userRef.get();
            const department = userDoc.data().department;
            if (department === 'oic') {
                navigation.navigate('OicScreen');
            } else if (department === 'police') {
                navigation.navigate('PoliceScreen');
            } else if (department === 'complaint') {
                navigation.navigate('ComplaintScreen');
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email:</Text>
            <TextInput style={styles.input} onChangeText={setEmail} value={email} />
            <Text style={styles.label}>Password:</Text>
            <TextInput style={styles.input} secureTextEntry onChangeText={setPassword} value={password} />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('TestSignup')
            }}>
                <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
        marginTop: 8,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
});

export default TestLogin;
