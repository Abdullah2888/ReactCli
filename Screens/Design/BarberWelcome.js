import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, TextInput, ScrollView } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const BarberWelcome = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: 10, padding: 3, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                    <EvilIcons name="user" size={40} color="black" />
                </TouchableOpacity>

                <Image source={require("../../Images/barber.png")} style={{ height: Dimensions.get('screen').height - 800, width: Dimensions.get('screen').width - 80, resizeMode: 'contain', alignItems: 'center' }} />

                <TouchableOpacity>
                    <Ionicons name="reorder-three-outline" size={27} color="#776755" />
                </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: '#f7eee9', width: '100%', height: Dimensions.get('screen').height - 500 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, padding: 15, color: 'black' }}>Welcome, John</Text>
                <TextInput placeholder='     Search' style={{ backgroundColor: 'white', borderRadius: 20, margin: 20 }} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 3, padding: 10, marginLeft: 10, color: 'black' }}>Your Last Visit</Text>
                <View style={{ backgroundColor: '#1b1b1b', width: '90%', height: Dimensions.get('screen').height - 750, marginLeft: 18, borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontSize: 17, marginLeft: 15, marginTop: 9, fontWeight: 'bold' }}>The New Barber Shop</Text>
                    <Text style={{ color: 'white', fontSize: 11, marginLeft: 15, marginTop: 7 }}>HAIR STYLING SPECIALISTS</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 4 }}>
                        <TouchableOpacity>
                            <Ionicons name="ios-location-outline" size={27} color="#917659" />
                        </TouchableOpacity>
                        <Text style={{ color: '#917659' }}>1.5 km</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text></Text>
                        <TouchableOpacity style={{ borderWidth: 1, borderColor: 'white', padding: 10, width: '25%', marginTop: 0, marginRight: 30, position: 'absolute', top: -55, right: 0 }}>
                            <Text style={{ color: 'white', textAlign: 'center' }}>Book</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: '#917659', width: '100%', height: '35%' }}>
                <Text style={{ color: 'white', fontSize: 20, margin: 15 }}>Services</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: 'white', borderRadius: 5, marginRight: 10, padding: 23, width: '33%', height: 200 }}>
                        <Fontisto name="scissors" size={75} color="white" />
                        <Text style={{ color: 'white', textAlign: 'center', marginTop: 15 }}>Haircut</Text>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 12 }}>10 Services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: 'white', backgroundColor: 'white', borderRadius: 5, marginRight: 10, padding: 23, width: '33%' }}>
                        <MaterialCommunityIcons name="emoticon-outline" size={75} color="#917659" />
                        <Text style={{ color: 'black', textAlign: 'center', marginTop: 15 }}>Haircut</Text>
                        <Text style={{ color: 'black', textAlign: 'center', fontSize: 12 }}>10 Services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: 'white', borderRadius: 5, marginRight: 10, padding: 25, width: '33%' }}>
                        <FontAwesome5 name="ruler-combined" size={75} color="white" />
                        <Text style={{ color: 'white', textAlign: 'center', marginTop: 15 }}>Haircut</Text>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 12 }}>10 Services</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={{backgroundColor:'#1b1b1b' , paddingBottom:15}}>
                <View style={{ backgroundColor: '#1b1b1b', width: '100%', height: '90%' }}>
                    <Text style={{color:'white' , marginTop:7 , marginLeft:12}}>Available Barbers</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:45 , height:45 , backgroundColor:'#a08870' ,borderRadius:100 , margin:10}}></View>                    
                        <Text style={{color:'white' , marginTop:15 , alignItems:'center'}}>Jeremy Steven{"\n"}
                        <Ionicons name="ios-location-outline" size={15} color="#917659"/> 123 Barber St London
                        </Text>
                        
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:45 , height:45 , backgroundColor:'#a08870' ,borderRadius:100 , margin:10}}></View>
                        <Text style={{color:'white' , marginTop:15 , alignItems:'center'}}>Jeremy Steven{"\n"}
                        <Ionicons name="ios-location-outline" size={15} color="#917659"/> 123 Barber St London
                        </Text>                       
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

})
export default BarberWelcome
