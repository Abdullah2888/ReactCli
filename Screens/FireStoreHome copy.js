import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
const FireStoreHome = () => {
    const [image, setImage] = useState(null)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const subscriber = firestore()
            .collection('Users')
            .onSnapshot(querySnapshot => {
                const users = [];

                querySnapshot.forEach(documentSnapshot => {
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setUsers(users);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);
    const openCamera = async () => {
        const result = await launchImageLibrary({ mediaType: 'photo' });
        setImage(result);
        console.log(result);
    }
    const uploadimage = async () => {
        const reference = storage().ref(image.assets[0].fileName);
        const pathToFile = image.assets[0].uri;
        // uploads file
        await reference.putFile(pathToFile);
        const url = await storage().ref(image.assets[0].fileName).getDownloadURL();
        // console.log(url);
        firestore()
            .collection('Users')
            .add({
                email: email,
                password: password,
                image: url,
            })
            .then(() => {
                console.log('User added!');
                // navigation.navigate('FireStoreHome')
            })
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View>
                        <Text>User ID: {item.email}</Text>
                        <Image source={{ uri: item.image }} style={{ width: 100, height: 50 }} />

                    </View>
                )}
                ListFooterComponent={
                    <View style={{marginTop:10}}>
                        {image !== null ? (
                            <Image source={{ uri: image.assets[0].uri }} style={{ width: 200, height: 150, justifyContent: 'center', alignItems: 'center' }} />
                        ) : null}
                        <TouchableOpacity style={styles.button} onPress={() => { openCamera(); }}>
                            <Text style={styles.buttonText}>Open Camera</Text>
                        </TouchableOpacity>
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
                        <TouchableOpacity style={styles.button} onPress={() => { uploadimage(); }}>
                            <Text style={styles.buttonText}>Upload Image</Text>
                        </TouchableOpacity>
                    </View>
                }
            />

        </View>
    )
}


const styles = StyleSheet.create({
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
export default FireStoreHome