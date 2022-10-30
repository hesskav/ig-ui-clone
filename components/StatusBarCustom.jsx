import React from 'react';
import { StatusBar, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const StatusBarCustom = ({ bgColor, contentColor}) => {
    const isFocused = useIsFocused();

    return (
        isFocused ? <StatusBar backgroundColor={bgColor} barStyle={contentColor} /> : null
    );
};

export default StatusBarCustom;
