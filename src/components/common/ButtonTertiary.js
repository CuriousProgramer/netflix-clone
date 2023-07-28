import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextComponent from './TextComponent';

export default function ButtonTertiary({icon,color,background,title}) {
  return (
    <TouchableOpacity style={{...styles.container,backgroundColor: 'transparent'}}>
        {icon}
        <TextComponent style={{color: color}}>{title}</TextComponent>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        paddingHorizontal: 15,
        paddingVertical: 5,

        borderRadius: 3
    }
})