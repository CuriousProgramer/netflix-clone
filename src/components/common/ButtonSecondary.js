import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextComponent from './TextComponent';

export default function ButtonSecondary({icon,color,background,title}) {
  return (
    <TouchableOpacity style={{...styles.container,backgroundColor: background}}>
        {icon}
        <TextComponent style={{color: color}}>{title}</TextComponent>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,

        borderRadius: 3
    }
})