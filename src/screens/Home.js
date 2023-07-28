import { View, Text, ImageBackground, SafeAreaView,FlatList, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import BaseLayout from '../components/layout/BaseLayout'
import TextComponent from '../components/common/TextComponent'
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconSecondary from 'react-native-vector-icons/AntDesign';
import PlayButton from '../components/common/PlayButton';
import ButtonSecondary from '../components/common/ButtonSecondary';
import ButtonTertiary from '../components/common/ButtonTertiary';
// import { signOut } from 'firebase/auth';
import auth from '@react-native-firebase/auth';

//Import Redux
import { useSelector,useDispatch } from 'react-redux';
// import { signOut } from '../store/actions/authActions';
// import { auth } from '../services/firebase';
// import { signOutUser } from '../store/actions/authActions';

const movies = [
    { id: '1', title: 'Movie 1', poster: require('../assets/images/Movies/stranger.png') },
    { id: '2', title: 'Movie 2', poster: require('../assets/images/Movies/peaky.png') },
    { id: '3', title: 'Movie 3', poster: require('../assets/images/Movies/avengers.png') },
    { id: '4', title: 'Movie 4', poster: require('../assets/images/Movies/moneyheist.png') },
    { id: '5', title: 'Movie 5', poster: require('../assets/images/Movies/manbee.png') },
  ];

export default function Home({navigation}) {

    
    const dispatch = useDispatch();

    const handleSignOut = async() => {
      // try {
      //   const res = await signOut(auth);
      //   console.log('Signout res ',res);
      auth()
      .signOut()
      .then(() => console.log('User signed out!'));
        // dispatch(signOutUser());
      // } catch (err) {
      //   console.log('err',err);
      // }
      // navigation.navigate('Feed')
    }

    const renderItem = ({ item }) => (
        <View style={{...styles.item,position: 'relative'}}>
           <View style={{position: 'absolute',top: 35,left: 35,zIndex: 1}}>
            <PlayButton></PlayButton> 
           </View>
          <Image source={item.poster} style={styles.poster} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      );
    
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.top}>
            <Image style={{marginRight: 'auto'}} source={require('../assets/images/logoLarge.png')}></Image>
            <TouchableOpacity onPress={()=>navigation.navigate('About')}>
              <Image source={require('../assets/images/globalIcon.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignOut}>
              <Image source={require('../assets/images/accountUser.png')}></Image>
            </TouchableOpacity>
        </View>
        <ScrollView>
            <View>
                <ImageBackground style={styles.bannerBackground} source={require('../assets/images/HomeBackground.png')}>
                    <View style={{...styles.bannerTop,zIndex: 1}}>
                        <TextComponent>TV Shows</TextComponent>
                        <TextComponent>Movies</TextComponent>
                        <TextComponent>Categories</TextComponent>
                    </View>
                    <View style={{...styles.bannerTop,zIndex: 1,marginTop: 'auto'}}>
                        <TextComponent>Exciting</TextComponent>
                        <TextComponent>Reality</TextComponent>
                        <TextComponent>Competition</TextComponent>
                    </View>
                    <View style={{...styles.bannerTop,zIndex: 1}}>
                        <ButtonTertiary icon={<IconSecondary name='plus' size={20} color={colors.text}/>} title={'My List'} background={colors.text} color={colors.text}/>
                        <ButtonSecondary icon={<Icon name='play' size={15}/>} title={'Play'} background={colors.text}/>
                        <ButtonTertiary icon={<IconSecondary name='infocirlceo' size={20} color={colors.text}/>} title={'Info'} background={colors.text} color={colors.text}/>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.container}>
                <TextComponent style={styles.continueHeading}>Continue Watching</TextComponent>
            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1
    },
    bannerBackground: {
        height: 550,
        width: '100%',
        resizeMode: 'cover',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 30,
        padding: 10
    },
    item: {
        marginRight: 10,
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
      continueHeading: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 10,
        letterSpacing: .25
      },
      bannerTop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        padding: 10
      }
})