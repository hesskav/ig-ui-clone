import React from 'react';
import { Icon, View, Text, HStack } from 'native-base';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Fontisto, Feather } from 'react-native-vector-icons';

import HomeContent from './HomeContent';
// import PostDetails from './PostDetails';

const Stack = createNativeStackNavigator();

const Home = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeContent' component={HomeContent} options={{
                headerLeft: () => <Text fontSize='2xl' pl='2' fontWeight='bold'>Instahess</Text>,
                headerShadowVisible: false,
                headerTitle: ' ',
                headerRight: () => (
                    <HStack space={4}>
                        <Icon as={Feather} name='plus-square' size='22px' color='black' />
                        <Icon as={Fontisto} name='messenger' size='22px' color='black' />
                    </HStack>
                )
            }} />
            {/* <Stack.Screen name='PostDetails' component={PostDetails} options={{headerShown: false}} /> */}
        </Stack.Navigator>
    );
};

export default Home;
