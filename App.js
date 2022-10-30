import React from "react";
import {
  Text,
  HStack,
  NativeBaseProvider,
  extendTheme,
  Icon,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Foundation, AntDesign, EvilIcons, Feather } from 'react-native-vector-icons';

import Home from "./components/Home";
import MasonryPosts from "./components/MasonryPosts";
import CreatePost from "./components/CreatePost";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import Stories from "./components/Stories";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabCont = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarActiveTintColor: 'black',
      tabBarShowLabel: false,
      headerShadowVisible: false,
      tabBarIcon: ({ focused, color, size}) => {
        let iconName;
        let iconAs;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home';
          iconAs = Foundation;
        } else if (route.name === 'MasonryPosts') {
          iconName = focused ? 'search1' : 'search1';
          iconAs = AntDesign;
        } else if (route.name === 'CreatePost') {
          iconName = focused ? 'instagram' : 'instagram';
          iconAs = AntDesign;
        } else if (route.name === 'Notifications') {
          iconName = focused ? 'heart' : 'hearto';
          iconAs = AntDesign;
        } else if (route.name === 'Profile') {
          iconName = focused ? 'user' : 'user';
          iconAs = EvilIcons;
        }

        // You can return any component that you like here!
        return <Icon as={iconAs} name={iconName} size={size} color={color} />;
      }
    })}>
      <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Tab.Screen name='MasonryPosts' component={MasonryPosts} options={{ headerShown: false }} />
      <Tab.Screen name='CreatePost' component={CreatePost} />
      <Tab.Screen name='Notifications' component={Notifications} options={{
        headerTitle: ' ',
        headerLeft: () => <Text fontSize='2xl' fontWeight='bold' pl='3'>Notifications</Text>,
        headerShadowVisible: false,
      }} />
      <Tab.Screen name='Profile' component={Profile} options={{
        headerTitle: ' ',
        headerLeft: () => (
          <HStack alignItems='center'>
            <Text fontSize='2xl' fontWeight='bold' pl='3'>hesskav</Text>
            <Icon as={Feather} name='chevron-down' size='sm' mt='1' color='black' />
          </HStack>
        ),
        headerRight: () => (
          <HStack alignItems='center' space='5' pr='4'>
            <Icon as={Feather} name='plus-square' size='lg' color='black' />
            <Icon as={Feather} name='menu' size='lg' color='black' />
          </HStack>
        )
      }} />
    </Tab.Navigator>
  )
}


const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};


export const theme = extendTheme();


export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='App' component={TabCont} />
          <Stack.Screen name='Stories' component={Stories} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

