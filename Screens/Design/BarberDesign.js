import { StyleSheet, Text, View, TouchableOpacity , Image , TextInput, Dimensions} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const BarberDesign = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#202020' }}>
            <View style={{alignItems:'flex-end' , margin:20}}>
                <TouchableOpacity>
                    <Ionicons name="reorder-three-outline" size={27} color="#776755" />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems:'center' }}> 
                <Image source={require("../../Images/barber.png")} style={{ height:Dimensions.get('screen').height - 500, width:Dimensions.get('screen').width, resizeMode:'contain'}}/>
            </View>
            <View style={{alignItems:'center'}}>
                <TextInput style={{width:'80%' , marginBottom: 25 , borderColor:'white' , borderTopWidth:0 , borderLeftWidth: 0 , borderRightWidth:0 , borderWidth:1}} placeholder='Email' placeholderTextColor='white'/>
                <TextInput style={{width:'80%' , borderColor:'white' , borderTopWidth:0 , borderLeftWidth: 0 , borderRightWidth:0 , borderWidth:1}} placeholder='Password' placeholderTextColor='white'/>
                <Text style={{color:'white' , fontFamily:'Poppins-Regular' ,marginTop:10}}>Forgot Password ?</Text>
            </View>
            <View style={{alignItems:'center' , marginTop:40}}>
                <TouchableOpacity style={{backgroundColor:'#917659' , padding:10 , width:'45%'}} onPress={()=>{
                    navigation.navigate("BarberWelcome")
                }}>
                    <Text style={{color:'white' , textAlign:'center' ,letterSpacing:2 ,  fontSize:16 , fontFamily:'Poppins-SemiBold'}}>LOG IN</Text>
                </TouchableOpacity>
            </View>

            <View style={{alignItems:'center' , marginTop:20}}>
                <Text style={{color:'#917659' , fontFamily:'Poppins-Regular'}}>Don't Have an Account ?</Text>
                <Text style={{color:'white', marginTop:6 , fontSize:17 , fontFamily:'Poppins-Regular'}}>Create an Account.</Text>
            </View>
        </View>
    )
}

export default BarberDesign

const styles = StyleSheet.create({})