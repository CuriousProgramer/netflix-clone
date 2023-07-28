import { View, Text, ImageBackground,TouchableOpacity, SafeAreaView, StyleSheet, Image, TextInput, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import colors from '../utils/colors'
import TextComponent from '../components/common/TextComponent'
import AppTextInput from '../components/common/AppTextInput';
import AppPasswordInput from '../components/common/AppPasswordInput';
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { setCurrentUser } from '../store/actions/authActions';

export default function SignIn({navigation}) {

  const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false);

    const handleSignIn = async () => {
      setLoading(true);
      try {
        const res = await auth().signInWithEmailAndPassword(email, password);
        const userSnapshot = await firestore().collection('Users').doc(res.user.uid).get()
        const user = userSnapshot.data();
        dispatch(setCurrentUser(user))
        console.log('User account  signed in!',user);
        setLoading(false);
      } catch (error) {    
        console.error('Failed to signin',error);
        setLoading(false);

      }
    };

  // const handleSignIn = async() => {
  //   if(email && password){
  //     try {
  //       const user = await signInWithEmailAndPassword(auth,email,password);
  //       const uid = user?.user?.uid;
  //       const token = user._tokenResponse.idToken;
  //       const docRef = doc(db,'Users',uid);
  //       const docSnap = await getDoc(docRef);
  //       if (docSnap.exists()) {
  //         const userData = {
  //           ...docSnap.data(),
  //           token: token
  //         }
  //         dispatch(signIn(userData))
  //       } else {
  //         // docSnap.data() will be undefined in this case
  //         console.log("No such document!");
  //       }
  //       console.log('SIgnin token is : - ',token);
  //     } catch (err) {
  //       console.log('err',err)
  //     }
  //   }
    // Handle sign-in logic here
  // };
  return (
    <ImageBackground style={{height: '100%',width: '100%'}} source={require('../assets/images/netflixBackground.jpeg')}>
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo}  source={require('../assets/images/netflixImage.png')}></Image>
            <View style={styles.form}>
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
                
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                  <Text style={styles.buttonText}>{loading ? <ActivityIndicator color={colors.text}/> : 'Sign In'}</Text>
                </TouchableOpacity>
                <View style={styles.flex}>
                    <TextComponent>New to Netflix?</TextComponent>
                    <TouchableOpacity onPress={()=>{navigation.navigate('SignUp',{})}}>
                        <TextComponent>Sign Up Now</TextComponent>
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