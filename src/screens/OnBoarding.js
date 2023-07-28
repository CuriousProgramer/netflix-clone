import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Alert } from 'react-native'
import React,{useState,useRef, useEffect} from 'react'
import BaseLayout from '../components/layout/BaseLayout'
import colors from '../utils/colors'
import TextComponent from '../components/common/TextComponent';
import Carousel,{Pagination} from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { signIn, signYou } from '../store/actions/authActions';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';
import auth from '@react-native-firebase/auth';

const slides = [
    {
      key: 'slide1',
      image: require('../assets/images/netflixLogo.png'),
      title: 'Slide 1',
    },
    {
      key: 'slide2',
      image: require('../assets/images/netflixLogo.png'),
      title: 'Slide 2',
    },
    {
      key: 'slide3',
      image: require('../assets/images/netflixLogo.png'),
      title: 'Slide 3',
    },
  ];

  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;

  

export default function OnBoarding({}) {
    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.user);
    
    const handleLogin = () => {
        // const user = { name: 'asdasd', age: 30 };
        // dispatch(signIn(user))
        auth()
  .signInAnonymously()
  .then(() => {
    console.log('User signed in anonymously');
  })
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(error);
  });
    };

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const carouselRef = useRef(null);

    const navigation = useNavigation();

    const handleSlideChange = (index) => {
        setActiveSlideIndex(index);
    };
    const _renderItem = ({ item, index }) => {
        return (
       
        <View style={styles.slide}>
            <TextComponent style={styles.headingLarge}>
                Unlimited movies, TV shows, and more.
            </TextComponent>
            <TextComponent style={styles.headingSmall}>
                Watch anywhere. Cancel anytime. Tap the link below to sign up.
            </TextComponent>
        </View>
        );
      };
  return (
    <BaseLayout>
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={require('../assets/images/netflixLogo.png')}/>
                <View style={styles.topRight}>
                    <TouchableOpacity>
                        <TextComponent style={styles.topButton}>Privacy</TextComponent>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{handleLogin()}}>
                        <TextComponent style={styles.topButton}>SignIn</TextComponent>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View>
                <Carousel
                    data={slides}
                    renderItem={_renderItem}
                    sliderWidth={WIDTH - 20}
                    itemWidth={WIDTH - 20}
                    loop={false}
                    onSnapToItem={handleSlideChange}

                />
                <Pagination
                    dotsLength={3}
                    activeDotIndex={activeSlideIndex}
                    containerStyle={styles.paginationContainer}
                    dotStyle={styles.paginationDot}
                    inactiveDotStyle={styles.paginationInactiveDot}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={1}
                />
            </View>
            <View>
                <TouchableOpacity style={{borderRadius: 2,overflow: 'hidden'}} onPress={()=>{navigation.navigate('SignIn',{})}}>
                    <TextComponent style={styles.primaryButton}>
                        Get Started
                    </TextComponent>
                </TouchableOpacity>
            </View>
        </View>
    </BaseLayout>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%'
    },  
    paginationDot: {
        height: 10,
        width: 10,
        borderRadius: 10,
        backgroundColor: 'red'
    },  
    top: {
        // padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    topRight: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10
    },
    topButton: {
        fontSize: 16
    },
    headingLarge: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    headingSmall: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    primaryButton: {
        borderRadius: 5,
        backgroundColor: '#D22F26',
        paddingVertical: 16,
        paddingHorizontal: 8,
        textAlign: 'center',
        width: '100%',
        fontWeight: 'bold',
        letterSpacing: .3
    }
})