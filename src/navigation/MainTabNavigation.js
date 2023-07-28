import { View, Text } from 'react-native'
import React from 'react';
import OnBoarding from '../screens/OnBoarding';
import SignIn from '../screens/SignIn';
import { createStackNavigator } from '@react-navigation/stack';
import TextComponent from '../components/common/TextComponent';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import MoviesSearch from '../screens/MoviesSearch';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Profile = () => {
    return (
        <View>
            <Text>Profile</Text>
        </View>
    )
}

const Downloads = () => {
    return (
        <View>
            <Text>Downloads</Text>
        </View>
    )
}

export default function MainTabNavigation({}) {

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#CBCBCB',
        tabBarInactiveTintColor: '#737373',
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: '#000000',
          height: 90,
          paddingTop: 10
        },
        headerShown: false
      })} >
        <Tab.Screen options={{
            tabBarIcon: ({focused}) => {
                return <MaterialCommunityIcon name={'home-variant'} size={35} color={focused ? '#CBCBCB' : '#737373'} />;
            }
        }} name="HomeTab" component={Home} />
        <Tab.Screen options={{
            tabBarIcon: ({focused}) => {
                return <AntDesign name={'search1'} size={35} color={focused ? '#CBCBCB' : '#737373'} />;
            }
        }} name="MoviesTab" component={MoviesSearch} />
        <Tab.Screen options={{
            tabBarIcon: ({focused}) => {
                return <MaterialCommunityIcon name={'download-circle'} size={35} color={focused ? '#CBCBCB' : '#737373'} />;
            }
        }} name="ProfileTab" component={Profile} />
        <Tab.Screen options={{
            tabBarIcon: ({focused}) => {
                return <MaterialCommunityIcon name={'download-circle'} size={35} color={focused ? '#CBCBCB' : '#737373'} />;
            }
        }} name="DownloadsTab" component={Downloads} />
    </Tab.Navigator>
  )
}