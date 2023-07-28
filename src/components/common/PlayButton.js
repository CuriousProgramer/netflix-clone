import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TextComponent from './TextComponent'
import colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function PlayButton() {
  return (
    <View style={styles.container}>
        <Icon style={styles.icon} name="play" size={25} color="#fff" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: 60,
        borderRadius: 60,
        backgroundColor: colors.background,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.text
    },
    icon: {
        marginLeft: 5
    }
})