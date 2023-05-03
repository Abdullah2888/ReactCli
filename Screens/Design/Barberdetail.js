import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import RadioButtonRN from 'radio-buttons-react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Barberdetail = () => {
  const [active, setactive] = useState();
  const data = [
    {
      label: 'male'
    },
    {
      label: 'female'
    },
    {
      label: 'other'
    }
  ];

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

        <View style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height - 140, backgroundColor: '#f7eee9', marginTop: 10 }}>
          <View style={{ borderWidth: 1, borderColor: '#958171', width: Dimensions.get('screen').width - 40, height: Dimensions.get('screen').height - 190, margin: 20, borderRadius: 9 }}>
            <View style={{ alignItems: 'center', marginTop: 15 }}>
              <FontAwesome5 name="ruler-combined" size={75} color="#857865" />
              <Text style={{ marginTop: 5 }}>Shaving</Text>
              <Text style={{ fontStyle: 'italic', marginTop: 5 }}>CHOOSE A SERVICE</Text>
              <Text style={{ margin: 20, textAlign: 'center' }}>In this example, we use the Ionicons component from the expo/vector-icons package to display an icon.  of the icon, respectively.</Text>
            </View>
            <View style={{ borderBottomColor: '#8e7a68', borderBottomWidth: 0.5, width: '90%', marginLeft: 20, marginRight: 20, opacity: 0.4 }}></View>
            <View style={{ marginTop: 10 }}>
              {data.map((item) => (
                <TouchableOpacity onPress={()=>setactive(item.label)}>
                  <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                    {setactive == item.label ?
                      <View>
                        <View style={{ width: 25, height: 25, borderColor: '#857865', borderWidth: 2, borderRadius: 15 }}>
                          <View style={{ backgroundColor: '#857865', width: '90%', height: '90%', margin: 1, borderRadius: 45 }}></View>
                        </View>
                        <Text style={{ fontSize: 20 }}>{item.label}</Text>
                      </View>
                      }

                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

        </View>
      </View>
    </ScrollView>
  )
}

export default Barberdetail

const styles = StyleSheet.create({})