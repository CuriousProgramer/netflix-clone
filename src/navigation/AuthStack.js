import { View, Text } from 'react-native'
import React from 'react';
import OnBoarding from '../screens/OnBoarding';
import SignIn from '../screens/SignIn';
import { createStackNavigator } from '@react-navigation/stack';
import TextComponent from '../components/common/TextComponent';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Onboarding' screenOptions={{headerShown: false}}>
      <Stack.Screen  name="Onboarding" component={OnBoarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}