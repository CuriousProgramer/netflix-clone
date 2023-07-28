import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import OnBoarding from './src/screens/OnBoarding'
import Home from './src/screens/Home'
import SignIn from './src/screens/SignIn'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack'
import MainStack from './src/navigation/MainStack'
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import Test from './src/Test'
import VideoPlayerScreen from './src/screens/VideoPlayerScreen'
import MoviesSearch from './src/screens/MoviesSearch'
import SignUp from './src/screens/SignUp'

export default function App() {

  return (
    <SignUp/>
  )
  const userData = useSelector((state)=> state.auth.user);
  console.log('USER DATA IS : ',userData);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <AuthStack/>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
  );
  
  
  
}