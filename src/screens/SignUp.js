import { View, Text, ImageBackground,TouchableOpacity, SafeAreaView, StyleSheet, Image, TextInput, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import colors from '../utils/colors'
import TextComponent from '../components/common/TextComponent'
import AppTextInput from '../components/common/AppTextInput';
import AppPasswordInput from '../components/common/AppPasswordInput';
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { setCurrentUser, signIn } from '../store/actions/authActions';


export default function SignUp({navigation}) {

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName,setFullName] = useState('');
  const [loading,setLoading] = useState(false);
  const [phone,setPhone] = useState(null);
  const [country,setCountry] = useState('');

  // const userCollectionRef = collection(db,'Users');

  // const createUser = async(id) => {
  //   try{
  //     await setDoc(db,'Users',id,{
  //         fullName: fullName,
  //         email: email,
  //         password: password,
  //         releaseData: new Date(),
  //         type: 'moview'
  //     })
  //   }catch(err){
  //       console.log('err',err)
  //   }
  // }

  const createUser = async (uid) => {
    try {
      await firestore().collection('Users').doc(uid).add({
        fullName: fullName,
        email: email,
        password: password,
        phone: phone,
      });
      console.log('User added!');
    } catch (error) {
      console.error('Error adding user: ', error);
    }
  }

  
  
  

  const handleSignUp = async () => {
    if(email && password){
      try {
        const res = await auth().createUserWithEmailAndPassword(email, password);

        await firestore().collection('Users').doc(res.user.uid).set({
          fullName: fullName,
          email: email,
          password: password,
          phone: phone,
          country: country
        });

        const userSnapshot = await firestore().collection('Users').doc(res.user.uid).get()
        const user = userSnapshot.data();

        dispatch(setCurrentUser(user));
        
        console.log('User added!',user);
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      }
    }
  };
   

  return (
    <ImageBackground style={{height: '100%',width: '100%'}} source={{uri: 'https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/aeda5289-8647-4509-b537-5236f7852c43/PK-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg'}}>
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo}  source={require('../assets/images/netflixImage.png')}></Image>
            <View style={styles.form}>
                <AppTextInput placeholder={'Full Name'}
                placeholderTextColor="#8e8e8e"
                onChangeText={setFullName}  
                value={fullName}                 
                autoCapitalize="none"
                keyboardType="email-address"
                />
                <AppTextInput placeholder={'Email'}
                placeholderTextColor="#8e8e8e"
                onChangeText={setEmail}  
                value={email}                 
                autoCapitalize="none"
                keyboardType="email-address"
                />
                <AppPasswordInput placeholder={'Password'}
                secureTextEntry
                placeholderTextColor="#8e8e8e"
                onChangeText={setPassword}  
                value={password}                 
                autoCapitalize="none"
                />
                <AppTextInput placeholder={'Phone No'}
                placeholderTextColor="#8e8e8e"
                onChangeText={setPhone}  
                value={phone}                 
                autoCapitalize="none"
                />
                <AppTextInput placeholder={'Country'}
                placeholderTextColor="#8e8e8e"
                onChangeText={setCountry}  
                value={country}                 

                />
                
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                  <Text style={styles.buttonText}>{loading ? <ActivityIndicator/> : 'Sign Up'}</Text>
                </TouchableOpacity>
                <View style={styles.flex}>
                    <TextComponent>Already an Account?</TextComponent>
                    <TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}}>
                        <TextComponent>SignIn</TextComponent>
                    </TouchableOpacity>
                </View>
                <TextComponent style={{color: colors.textSecondary,fontSize: 14}}>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                </TextComponent>
                <TextComponent style={{color: '#0091d1',fontSize: 14}}>
                    Learn More
                </TextComponent>
            </View>
        </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    flex: {
        display: 'flex',flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 10
    },  
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        opacity: .9,
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        resizeMode: 'contain',
        zIndex: 1
    },
    form: {
        backgroundColor: colors.background,
        padding: 20,
        borderRadius: 5,
        width: '90%',
        marginBottom: 100
      },
      input: {
        borderWidth: 1,
        borderColor: '#8e8e8e',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        fontSize: 20,
      },
      button: {
        backgroundColor: colors.secondary,
        borderRadius: 5,
        fontSize: 20,
        padding: 10,
        alignItems: 'center',
        marginVertical: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
})