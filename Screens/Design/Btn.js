import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Btn = ({ bgColor, textColor, btnLabel, Press }) => {
    return (
        <TouchableOpacity style={{ backgroundColor: bgColor, borderRadius: 100, alignItems: 'center', width: 350, paddingVertical: 5 , marginVertical:10}} onPress={Press}>
            <Text style={{ color: textColor, fontSize: 25, fontWeight: 'bold' }}>{btnLabel}</Text>
        </TouchableOpacity>
    )
}

export default Btn

const styles = StyleSheet.create({})