import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import ImagePicker from 'react-native-image-crop-picker';
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

    const pickImage = async () => {
        try {
          const image = await ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          });
          setImage(image.path)
        } catch (error) {
          console.log(error);
        }
      };
      

    const uploadimage = async () => {
        const filename = image.substring(image.lastIndexOf('/') + 1);
        console.log(filename);
        const reference = storage().ref(filename);
        const pathToFile = image;
        // uploads file
        await reference.putFile(pathToFile);
        const url = await storage().ref(filename).getDownloadURL();
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
                setEmail('')
                setPassword('')
                setImage(null)
                
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
                            <Image source={{ uri: image }} style={{ width: 200, height: 100 }} />
                        ) : null}
                        <TouchableOpacity style={styles.button} onPress={() => { pickImage()}}>
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