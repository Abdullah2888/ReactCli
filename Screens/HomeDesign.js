import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Background from './Design/Background'
import Btn from './Design/Btn'
import { darkGreen, green } from './Design/Constant'

const HomeDesign = ({ navigation }) => {
    return (
        <Background>
            <View style={{ marginHorizontal: 25, marginVertical: 100 }}>
                <Text style={{ color: 'white', fontSize: 50 }}>Let's Start</Text>
                <Btn bgColor={green} textColor="white" btnLabel="Login" Press={() => { navigation.navigate("Login") }} />
                <Btn bgColor="white" textColor={darkGreen} btnLabel="SignUp" Press={() => { navigation.navigate("SignUp") }} />
            </View>
            <View style={{}}>
            </View>
        </Background>
    )
}

export default HomeDesign

const styles = StyleSheet.create({})