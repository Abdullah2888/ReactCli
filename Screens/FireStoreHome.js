import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
const FireStoreHome = ({navigation , item}) => {
    const [image, setImage] = useState(null)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    //to show data 
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

    const onDateChange = (date, type) => {
        if (type === 'END_DATE') {
            const endDate = moment(date).endOf('day').format('YYYY-MM-DD HH:mm:ss');

            setSelectedEndDate(endDate);
        } else {
            const startDate = moment(date).startOf('day').format('YYYY-MM-DD HH:mm:ss');
            setSelectedStartDate(startDate);
            setSelectedEndDate(null);
        }
    };


    //to pick image
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

    //to upload image
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
                startDate: selectedStartDate,
                endDate: selectedEndDate,
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
                    <View style={{borderColor:"red" , borderWidth:2}}>
                        <Text>User ID: {item.email}</Text>
                        <Image source={{ uri: item.image }} style={{ width: 100, height: 50 }} />
                        <Text>StartDate: {item.startDate}</Text>
                        <Text>EndDate: {item.endDate}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            navigation.navigate('ShowDates' ,{item:item})
                        }}>
                            <Text style={styles.buttonText}>Move</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListFooterComponent={
                    <View style={{ marginTop: 10 }}>
                        {image !== null ? (
                            <Image source={{ uri: image }} style={{ width: 200, height: 100 }} />
                        ) : null}
                        <TouchableOpacity style={styles.button} onPress={() => { pickImage() }}>
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
                        <CalendarPicker
                            startFromMonday={true}
                            allowRangeSelection={true}
                            todayBackgroundColor="#f2e6ff"
                            selectedDayColor="#7300e6"
                            selectedDayTextColor="#FFFFFF"
                            onDateChange={onDateChange}
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
        width: 80,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})
export default FireStoreHome