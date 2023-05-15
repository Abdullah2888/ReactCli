import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, TextInput, ScrollView } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const BarberWelcome = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
      <View style={{ flex: 1}}>
        <View style={{ padding: 3, flexDirection: 'row' , margin:7 }}>
          <TouchableOpacity>
            <EvilIcons name="user" size={40} color="black" />
          </TouchableOpacity>

          <Image source={require("../../Images/barber.png")} style={{ height: Dimensions.get('screen').height - 800, width: Dimensions.get('screen').width - 80, resizeMode: 'contain', alignItems: 'center' }} />

          <TouchableOpacity>
            <Ionicons name="reorder-three-outline" size={27} color="#776755" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ width: '100%', height: Dimensions.get('screen').height / 2, backgroundColor: '#f7eee9' }}>
          <Text style={{ fontSize: 20, marginTop: 10, padding: 15, color: 'black', fontFamily: 'Poppins-Regular' }}>Welcome John</Text>
          <TextInput placeholder='     Search' style={{ backgroundColor: 'white', borderRadius: 20, margin: 20 }} />
          <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular', marginTop: 3, padding: 10, marginLeft: 10, color: 'black' }}>Your Last Visit</Text>
          <View style={{ backgroundColor: '#1b1b1b', width: '90%', height: Dimensions.get('screen').height / 6, marginLeft: 18, borderRadius: 10 }}>
            <View>
              <Text style={{ color: 'white', fontSize: 17, marginLeft: 15, marginTop: 9, fontFamily: 'Poppins-Regular' }}>The New Barber Shop</Text>
              <Text style={{ color: 'white', fontSize: 11, marginLeft: 15, marginTop: 7, fontFamily: 'Poppins-Regular' }}>HAIR STYLING SPECIALISTS</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 15, marginLeft: 10, marginTop: 10 }}>
                <View>
                  <TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                      <Ionicons name="ios-location-outline" size={25} color="#917659" />
                      <Text style={{ color: '#917659', fontFamily: 'Poppins-Regular' }}>1.5 km</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={{ borderWidth: 1, borderColor: 'white', padding: 10, width: '100%' }}onPress={()=>{
                    navigation.navigate("Barberdetail")
                }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Poppins-Regular' }}>Book</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#917659', width: '100%', height: '100%' }}>
          <Text style={{ color: 'white', fontSize: 20, margin: 15, fontFamily: 'Poppins-Regular' }}>Services</Text>
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: 'white', borderRadius: 5, marginRight: 10, padding: 23, width: '33%', height: 200 }}>
              <Fontisto name="scissors" size={75} color="white" />
              <Text style={{ color: 'white', textAlign: 'center', marginTop: 15, fontFamily: 'Poppins-Regular' }}>Haircut</Text>
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 12, fontFamily: 'Poppins-Regular' }}>10 Services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: 'white', backgroundColor: 'white', borderRadius: 5, marginRight: 10, padding: 23, width: '33%' }}>
              <MaterialCommunityIcons name="emoticon-outline" size={75} color="#917659" />
              <Text style={{ color: 'black', textAlign: 'center', marginTop: 15, fontFamily: 'Poppins-Regular' }}>Haircut</Text>
              <Text style={{ color: 'black', textAlign: 'center', fontSize: 12, fontFamily: 'Poppins-Regular' }}>10 Services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: 'white', borderRadius: 5, marginRight: 10, padding: 25, width: '33%' }}>
              <FontAwesome5 name="ruler-combined" size={75} color="white" />
              <Text style={{ color: 'white', textAlign: 'center', marginTop: 15, fontFamily: 'Poppins-Regular' }}>Haircut</Text>
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 12, fontFamily: 'Poppins-Regular' }}>10 Services</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>


      <View style={{ backgroundColor: '#1b1b1b', width: '100%', height: '90%' }}>
        <Text style={{ color: 'white', marginTop: 7, marginLeft: 12 }}>Available Barbers</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 45, height: 45, backgroundColor: '#a08870', borderRadius: 100, margin: 10 }}></View>
          <Text style={{ color: 'white', marginTop: 15, alignItems: 'center', fontFamily: 'Poppins-Regular' }}>Jeremy Steven{"\n"}
            <Ionicons name="ios-location-outline" size={15} color="#917659" /> 123 Barber St London
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 45, height: 45, backgroundColor: '#a08870', borderRadius: 100, margin: 10 }}></View>
          <Text style={{ color: 'white', marginTop: 15, alignItems: 'center', fontFamily: 'Poppins-Regular' }}>Jeremy Steven{"\n"}
            <Ionicons name="ios-location-outline" size={15} color="#917659" /> 123 Barber St London
          </Text>

        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

})
export default BarberWelcome