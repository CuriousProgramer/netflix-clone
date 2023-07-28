import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import TextComponent from '../common/TextComponent'

export default function ReviewCard() {
  return (
    <View style={styles.container}>
      <Image style={styles.userImg} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpD0bN7-WV7N1KzVmJcaXA9K1ZYVWG2zPZkEYFFBqNWQ&s'}}/>
      <View>
        <TextComponent style={styles.userTitle}>Micheal Clarke</TextComponent>
        <TextComponent style={styles.userReview}>Very good recommended!!</TextComponent>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
        item: {
        // marginRight: 10,
        marginBottom: 1
      },
      container: {
        margin: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 15
      },    
      userTitle: {
        fontWeight: 'bold',
        fontSize: 16
      },    
      userImg: {
        height: 40,
        width: 40,
        borderRadius: 40
      },
      poster: {
        width: 120,
        height: 180,
        borderRadius: 10,
      },
      title: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
      },
})