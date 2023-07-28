import { View, Text, StyleSheet, SafeAreaView, Image,FlatList } from 'react-native'
import React, { useEffect } from 'react'
import TextComponent from '../components/common/TextComponent'
import colors from '../utils/colors'
import Video from 'react-native-video';
import ButtonTertiary from '../components/common/ButtonTertiary';
import IconSecondary from 'react-native-vector-icons/AntDesign';
import ReviewCard from '../components/movie/ReviewCard';

export default function VideoPlayerScreen({navigation}) {
  useEffect(()=>{
    // console.log('Bro')
  },[])

  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ];

  const renderItem = ({ item }) => (
    <ReviewCard item={item}/>
  );

  const keyExtractor = (item) => item.id.toString();


  return (
    <SafeAreaView style={styles.container}>
        <Video
        controls={true}
            ref={(ref) => {
              this._player = ref
          }}   
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          style={{ width: '100%', height: 300 }}
          onError={(e)=>{console.log('Error bro',e)}}
        />
        <View style={{padding: 10}}>
          <View style={styles.flex}>
            <Image source={require('../assets/images/logoMedium.png')}/>
            <Image source={require('../assets/images/seriesTitle.png')}/>
          </View>
          <TextComponent style={{fontSize: 22,fontWeight: 'bold',marginVertical: 10}}>Wednesday</TextComponent>
          <View style={styles.flex}>
            <TextComponent>2022</TextComponent>
            <Image style={styles.tv} source={require('../assets/images/tv-ma.png')}/>
            <TextComponent>5 Seasons</TextComponent>
            <Image style={styles.vision} source={require('../assets/images/vision.png')}/>
            <Image style={styles.hd} source={require('../assets/images/hd.png')}/>
          </View>
          <View style={{...styles.videoControls}}>
            <ButtonTertiary icon={<IconSecondary name='plus' size={25} color={colors.text}/>} title={'My List'} background={colors.text} color={colors.text}/>
            <ButtonTertiary icon={<IconSecondary name='like2' size={25} color={colors.text}/>} title={'Rate'} background={colors.text} color={colors.text}/>
          </View>
          <TextComponent style={{...styles.videoTitle,marginTop: 15}}>S5: EP4 Nothing Remains the Same</TextComponent>
          <TextComponent style={styles.videoDesc}>Hearts flip as Heather weds Tarek. Jason and Mary grapple with being ghosted. Go solo or take the next step: The agents face life-changing decisions.</TextComponent>
          <TextComponent style={{...styles.videoTitle,marginTop: 15}}>Reviews</TextComponent>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1
    },
    videoTitle: {
      fontWeight: 'bold',
      fontSize: 18
    },
    videoDesc: {
      fontSize: 18,
    },

    flex: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 15,
      marginVertical: 5
    },
    videoControls: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 15,
      marginVertical: 15
    },
    videoDesc: {
      marginTop: 10,
      marginBottom: 10
    },
    descIcons: {
      height: 30
    },
    vision: {
      height: 20,
      width: 70

    },
    hd: {
      height: 20,
      width: 20
    },
    tv:{
      height: 20,
      width: 50
    },
    ad: {

    }
})