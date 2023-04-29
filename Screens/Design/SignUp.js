import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Background from '../Background'
import { darkGreen } from './Constant'
import Field from './Field'
import Btn from './Btn'

const Login = ({ navigation }) => {
    return (
        <Background>
            <View style={{ alignItems: 'center', width: 460, justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginVertical: 10 }}>Register</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>Create a new account</Text>
                <View style={{ backgroundColor: 'white', height: 700, width: 460, borderTopLeftRadius: 130, paddingTop: 30, alignItems: 'center' }}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
                        <View style={{ alignItems: 'center' ,paddingRight:20}}>
                            <Field placeholder="First Name"
                                style={{
                                    width: 300
                                }} />
                            <Field placeholder="Last Name" style={{
                                width: 300
                            }} />
                            <Field placeholder="Email / Username" keyboardType={"email-address"} style={{
                                width: 300
                            }} />
                            <Field placeholder="Contact No" style={{
                                width: 300
                            }} />
                            <Field placeholder="Password" secureTextEntry={true} style={{
                                width: 300
                            }} />
                            <Field placeholder="Confirm Password" secureTextEntry={true} style={{
                                width: 300
                            }} />

                            <View style={{ flexDirection: 'row', alignItems: 'center'  , paddingRight:20}}>
                                <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 16 }}>By Signing in , you agree to our</Text>
                                <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}> Terms & conditions</Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,  alignItems: 'center' ,paddingRight:20}}>
                                <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 16 }}>and </Text>
                                <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Privacy Policy</Text>
                            </View>
                            <Btn textColor='white' bgColor={darkGreen} btnLabel="SignUp" style={{ width: 300 , paddingRight:20}} Press={() => {
                                alert("Account Created")
                                navigation.navigate("Login")
                            }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'center' ,paddingRight:20}}>
                                <Text style={{ fontSize: 16 }}>Already Have an Account? </Text>
                                <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                                    <Text style={{ fontSize: 16, color: darkGreen }}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Background>
    )
}

export default Login

const styles = StyleSheet.create({})