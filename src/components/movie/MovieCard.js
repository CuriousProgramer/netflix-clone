import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native'
import React from 'react';
import PlayButton from '../common/PlayButton';

export default function MovieCard({item,playButton,onPress}) {
  return (
    <TouchableHighlight onPress={onPress}>
        <View style={{...styles.item,position: 'relative'}}>
        {
            playButton && <View style={{position: 'absolute',top: 35,left: 35,zIndex: 1}}>
                <PlayButton/>
            </View>
        }
        <Image source={item.poster} style={styles.poster} />
        {/* <Text style={styles.title}>{item.title}</Text> */}
        </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    item: {
        // marginRight: 10,
        marginBottom: 10
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