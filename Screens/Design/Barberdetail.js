import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import RadioButtonRN from 'radio-buttons-react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Barberdetail = () => {
  const data = [
    {
      id: 1,
      label: 'Basic HairCut',
      price: '25$',
    },
    {
      id: 2,
      label: 'Normal HairCut',
      price: '35$',
    },
    {
      id: 3,
      label: 'Premium HairCut',
      price: '45$',
    },
    {
      id: 4,
      label: 'Shave',
      price: '15$',
    },
    {
      id: 5,
      label: 'Beard',
      price: '20$',
    },
    {
      id: 6,
      label: 'Line Up',
      price: '25$',
    },

  ];
  const [active, setactive] = useState(1);

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
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

        <View style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height - 160, backgroundColor: '#f7eee9', marginTop: 10 }}>
          <View style={{ borderWidth: 1, borderColor: '#958171', width: Dimensions.get('screen').width - 40, height: Dimensions.get('screen').height - 180, margin: 20, borderRadius: 9 }}>
            <View style={{ alignItems: 'center', marginTop: 15 }}>
              <FontAwesome5 name="ruler-combined" size={75} color="#857865" />
              <Text style={{ marginTop: 5, color: 'black', fontSize: 20 }}>Shaving</Text>
              <Text style={{ fontStyle: 'italic', marginTop: 5, color: 'black', fontSize: 12 }}>CHOOSE A SERVICE</Text>
              <Text style={{ margin: 20, textAlign: 'center', color: 'black' }}>In this example, we use the Ionicons component from the expo/vector-icons package to display an icon.  of the icon, respectively.</Text>
            </View>
            <View style={{ borderBottomColor: '#8e7a68', borderBottomWidth: 0.5, width: '90%', marginLeft: 20, marginRight: 20, opacity: 0.4 }}></View>
            <View style={{ marginTop: 10 , width:'100%'}}>
              {data.map((item, index) =>
                <TouchableOpacity onPress={() => setactive(item.id)} key={index}>
                  <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 18 }}>

                    <View style={{ width: 23, height: 23, backgroundColor: '#e5d3c7', borderRadius: 15, marginBottom: 20 }}>
                      {active == item.id ? <View style={{ backgroundColor: '#937656', width: '60%', height: '60%', margin: 4.5, borderRadius: 50, marginBottom: 20 }}></View> : null}
                      <Text></Text>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 20, marginLeft: 5 }}>{item.label}</Text>
                    <View style={{ alignItems: 'flex-end' ,flex:1 , marginRight:15}}>
                      <Text style={{textAlign:'center'}}>{item.price}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            </View>

            <View style={{ alignItems: 'center', marginTop: 15 }}>
              <TouchableOpacity style={{ borderColor: '#958171', width: '60%', height: '27%', borderWidth: 1 }}>
                <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', color: 'black', padding: 2, margin: 5 }}>BOOK AN APPOINTMENT </Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    </ScrollView>
  )
}

export default Barberdetail

const styles = StyleSheet.create({})