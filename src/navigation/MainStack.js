import { View, Text } from 'react-native'
import React from 'react';
import OnBoarding from '../screens/OnBoarding';
import SignIn from '../screens/SignIn';
import { createStackNavigator } from '@react-navigation/stack';
import TextComponent from '../components/common/TextComponent';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import MoviesSearch from '../screens/MoviesSearch';
import HomeStack from './HomeStack';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator initialRouteName='HomeStack' screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="Movies" component={MoviesSearch} />
    </Stack.Navigator>
  )
}