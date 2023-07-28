import { View, Text } from 'react-native'
import React from 'react';
import OnBoarding from '../screens/OnBoarding';
import SignIn from '../screens/SignIn';
import { createStackNavigator } from '@react-navigation/stack';
import TextComponent from '../components/common/TextComponent';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import MoviesSearch from '../screens/MoviesSearch';
import MainTabNavigation from './MainTabNavigation';
import VideoPlayerScreen from '../screens/VideoPlayerScreen';

const Stack = createStackNavigator();

export default function HomeStack({}) {

    const Feed = () => {
        return (
            <View>
                <Text>Feed</Text>
            </View>
        )
    }

    const About = () => {
        return (
            <View>
                <Text>About</Text>
            </View>
        )
    }

  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={MainTabNavigation} />
      <Stack.Screen options={{tabBarVisible: false}} name="Feed" component={Feed} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="VideoPlayerScreen" component={VideoPlayerScreen} />
    </Stack.Navigator>
  )
}