import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Btn = (props) => {
    // console.warn(props)
    return (
        <TouchableOpacity style={{ backgroundColor: props.bgColor, borderRadius: 100, alignItems: 'center', width: 350, paddingVertical: 5 , marginVertical:10 ,...props.style}} onPress={props.Press
        }>
            <Text style={{ color: props.textColor, fontSize: 25, fontWeight: 'bold' }}>{props.btnLabel}</Text>
        </TouchableOpacity>
    )
}

export default Btn

const styles = StyleSheet.create({})