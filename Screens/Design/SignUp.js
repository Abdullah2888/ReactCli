import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../Background'
import { darkGreen } from './Constant'
import Field from './Field'
import Btn from './Btn'

const Login = ({navigation}) => {
    return (
        <Background>
            <View style={{ alignItems: 'center', width: 460 }}>
                <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginVertical: 10 }}>Register</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>Create a new account</Text>
                <View style={{ backgroundColor: 'white', height: 700, width: 460, borderTopLeftRadius: 130, paddingTop: 30, alignItems: 'center' }}>
                    <Field placeholder="First Name" />
                    <Field placeholder="Last Name" />
                    <Field placeholder="Email / Username" keyboardType={"email-address"} />
                    <Field placeholder="Contact No" />
                    <Field placeholder="Password" secureTextEntry={true} />
                    <Field placeholder="Confirm Password" secureTextEntry={true} />

                    {/* <View style={{ alignItems: 'center', width: '78%', paddingRight: 16  }}>
                        <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 16 }}>By Signing in , you agree to our</Text>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Terms & conditions</Text>
                    </View> */}
                    <Btn textColor='white' bgColor={darkGreen} btnLabel="SignUp" Press={() => {alert("Account Created")
                    navigation.navigate("Login")
                    }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{fontSize:16}}>Already Have an Account?</Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                            <Text style={{fontSize:16 , color:darkGreen}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    )
}

export default Login

const styles = StyleSheet.create({})