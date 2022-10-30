import React from 'react';
import { View, Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Search from './Search';

const MasonryPosts = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Search' component={Search} />
        </Stack.Navigator>
    );
};

export default MasonryPosts;
