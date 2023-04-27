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
                <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginVertical: 10 }}>Login</Text>
                <View style={{ backgroundColor: 'white', height: 700, width: 460, borderTopLeftRadius: 130, paddingTop: 100, alignItems: 'center' }}>
                    <Text style={{ fontSize: 40, color: darkGreen, fontWeight: 'bold' }}>Welcome Back</Text>
                    <Text style={{ color: 'grey', fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>Login to your account</Text>
                    <Field placeholder="Email / Username" keyboardType={"email-address"} />
                    <Field placeholder="Password" secureTextEntry={true} />
                    <View style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16 }}>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Forgot Password</Text>
                    </View>
                    <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => alert("Logged In")} />
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{fontSize:16}}>Don't Have an Account?</Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
                            <Text style={{fontSize:16 , color:darkGreen}}>SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    )
}

export default Login

const styles = StyleSheet.create({})