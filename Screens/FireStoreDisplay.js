import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';

const FireStoreDisplay = () => {
    const [users, setUsers] = useState([]); // Initial empty array of users

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
                console.log(users);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);
    return (
        <View>
            <Text>FireStoreDisplay</Text>

            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View style={styles.txt}>
                        <Text style={styles.txt1}>User ID: {item.key}</Text>
                        <Text style={styles.txt1}>User Name: {item.email}</Text>
                        <Text style={styles.txt1}>User pass: {item.password}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default FireStoreDisplay

const styles = StyleSheet.create({
    txt: {
        height: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    txt1: {
        flex: 1,
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 5,
        color: "white",
    }
})