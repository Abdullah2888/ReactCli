import { StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react'
import { darkGreen } from './Constant'

const Field = (props) => {
  return (
    <TextInput {...props} style={{borderRadius:100 , color: darkGreen , paddingHorizontal:10 , width:'80%' , backgroundColor:'rgb(220,220,220)' , marginVertical:10}} placeholderTextColor={darkGreen}></TextInput>
  )
}

export default Field

const styles = StyleSheet.create({})