import { View, Text, ImageBackground,TextInput, SafeAreaView,FlatList, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import colors from '../utils/colors';
import PlayButton from '../components/common/PlayButton';
import TextComponent from '../components/common/TextComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import MovieCard from '../components/movie/MovieCard';


export default function MoviesSearch({navigation}) {

    const [searchVal,setSearchVal] = useState('');

    const movies = [
        { id: '1', title: 'Movie 1', poster: require('../assets/images/Movies/stranger.png') },
        { id: '2', title: 'Movie 2', poster: require('../assets/images/Movies/peaky.png') },
        { id: '3', title: 'Movie 3', poster: require('../assets/images/Movies/avengers.png') },
        { id: '4', title: 'Movie 4', poster: require('../assets/images/Movies/moneyheist.png') },
        { id: '5', title: 'Movie 5', poster: require('../assets/images/Movies/manbee.png') },
        { id: '6', title: 'Movie 6', poster: require('../assets/images/Movies/manbee.png') },

      ];

      const renderItem = ({ item }) => (
        <MovieCard item={item} onPress={()=>navigation.navigate('VideoPlayerScreen',{})}/>
        // <View style={{...styles.item,position: 'relative'}}>
        //    {/* <View style={{position: 'absolute',top: 35,left: 35,zIndex: 1}}>
        //     <PlayButton></PlayButton> 
        //    </View> */}
        //   <Image source={item.poster} style={styles.poster} />
        //   {/* <Text style={styles.title}>{item.title}</Text> */}
        // </View>
      );


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.top}>
            <View style={styles.inputContainer}>
                <Icon name={'search'} size={24} color="gray" style={styles.icon} />
                <TextInput 
                    style={styles.input}  
                    placeholder={'Search...'}
                    placeholderTextColor={colors.textSecondary}
                    value={searchVal}
                    onChangeText={setSearchVal}
                />
                {
                    searchVal && <TouchableOpacity onPress={()=>setSearchVal('')}><Icon2 name={'closecircle'} size={18} color="gray" style={styles.icon} /></TouchableOpacity>
                }

            </View>
        <TextComponent style={styles.heading}>Movies & TV</TextComponent>
        </View>
        <FlatList
            style={{padding: 5}}
            data={movies}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={false}
            numColumns={3}
            showsHorizontalScrollIndicator={false}
            columnWrapperStyle={styles.columnWrapper}
        />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
    },
    top: {
        paddingHorizontal: 10
    },  
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.backgroundLight,
        borderRadius: 30,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
      },
      input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 18,
        color: colors.text
      },
      columnWrapper: {
        // marginHorizontal: 10,
        justifyContent: 'space-between',
      },
      icon: {
        marginRight: 10,
      },

    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        color: colors.text
    },  
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