import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Picker } from '@react-native-picker/picker';
import storage from '@react-native-firebase/storage';

const TestSignup = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [department, setDepartment] = useState('');
    const [image, setImage] = useState(null);

    const handleSignUp = async () => {
        try {
            const authCredential = await auth().createUserWithEmailAndPassword(email, password);
            const user = authCredential.user;
            const userRef = firestore().collection('users').doc(user.uid);
            const imageRef = storage().ref().child(`users/${user.uid}/profile.jpg`);
            const imageBlob = await fetch(image.path).then((response) => response.blob());
            await imageRef.put(imageBlob);
            const imageUrl = await imageRef.getDownloadURL();
            await userRef.set({
                department,
                imageUrl,
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    const handlePickImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
        }).then((image) => {
            setImage(image);
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email:</Text>
            <TextInput style={styles.input} onChangeText={setEmail} value={email} />
            <Text style={styles.label}>Password:</Text>
            <TextInput style={styles.input} secureTextEntry onChangeText={setPassword} value={password} />
            <Text style={styles.label}>Department:</Text>
            <View style={styles.dropdown}>
                <Picker selectedValue={department} onValueChange={setDepartment}>
                    <Picker.Item label="OIC" value="oic" />
                    <Picker.Item label="Police" value="police" />
                    <Picker.Item label="Complaint" value="complaint" />
                </Picker>
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={styles.button} onPress={handlePickImage}>
                    <Text style={styles.buttonText}>Select Image</Text>
                </TouchableOpacity>
                {image && (
                    <Image source={{ uri: image.path }} style={styles.image} resizeMode="contain" />
                )}
                <TouchableOpacity style={styles.button1} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{
                    navigation.navigate('TestLogin')
                }}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                
            </View>
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
    dropdown: {
        borderWidth: 1,
        borderRadius:8,
        borderColor: '#ccc',
    },
    button: {
        padding: 5,
        backgroundColor: 'red',
        width: '50%',
        height: '17%',
        borderRadius:5,
        marginTop:10,
    },
    button1: {
        padding: 5,
        backgroundColor: 'grey',
        width: '50%',
        height: '17%',
        borderRadius:5,
        marginTop:10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize:17,
        fontWeight:'bold',
        padding:6,
    }
})

export default TestSignup