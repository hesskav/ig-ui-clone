import React, { useLayoutEffect } from 'react';
import { Box, Text, FlatList, ScrollView, HStack, VStack, Icon, IconButton, Image } from 'native-base';

import { AntDesign } from 'react-native-vector-icons';

import StatusBarCustom from './StatusBarCustom';

const recentSearches = [
    {
        username: 'benson_ben10',
        name: 'Benson Bwalya',
        img: require('../assets/benson.jpeg'),
    },
    {
        username: 'chola.jeorge',
        name: 'Jeorge Chola',
        img: require('../assets/jeorge.jpeg'),
    },
    {
        username: 'rasford.332',
        name: 'Rasford N',
        img: require('../assets/urus.jpg'),
    },
    {
        username: 'tulipaso',
        name: 'Thomas Mika',
        img: require('../assets/landscape.jpg'),
    },
    {
        username: 'uieohs',
        name: 'Oplayi bunee',
        img: require('../assets/model_x.jpg'),
    },
    {
        username: 'preindb_ed',
        name: 'People Hum',
        img: require('../assets/macbook.jpg'),
    },
    {
        username: 'heew bcd',
        name: 'Huiopla Yhe',
        img: require('../assets/audi.jpg'),
    },
    {
        username: 'gusdopp',
        name: 'Guoin Hun',
        img: require('../assets/hess.jpeg'),
    },
]

const Search = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                placeholder: 'Search',
            },
        });
    }, [navigation]);

    return (
        <Box bg='white' flex={1}>
            <StatusBarCustom bgColor='white' contentColor='dark-content' />
            <FlatList
                pl='3'
                pr='1'
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
                data={recentSearches}
                keyExtractor={(item) => item.username}
                ListHeaderComponent={(
                    <HStack alignItems='center' justifyContent='space-between' pr='3' py='4'>
                        <Text fontSize='md' fontWeight='bold'>Recents</Text>
                        <Text fontSize='15' fontWeight='bold' color='lightBlue.500'>See All</Text>
                    </HStack>
                )}
                renderItem={({item}) => (
                    <HStack justifyContent='space-between' alignItems='center' pb='3'>
                        <HStack space='3'>
                            <Box 
                                bg={{
                                    linearGradient: {
                                        colors: ['#ffc400', '#dd00bc'],
                                        start: [0, 1],
                                        end: [1, 0]
                                    }
                                }}
                                w='58px'
                                h='58px'
                                rounded='29'
                                justifyContent='center'
                                alignItems='center'
                            >
                                <Image
                                    source={item?.img}
                                    alt='img'
                                    w='54px'
                                    h='54px'
                                    rounded='full'
                                    resizeMode='cover'
                                    borderWidth='3'
                                    borderColor='white'
                                />
                            </Box>
                            <VStack justifyContent='center'>
                                <Text fontWeight='bold'>{item?.username}</Text>
                                <Text color='gray.500'>{item?.name}</Text>
                            </VStack>
                        </HStack>
                        <IconButton 
                            icon={<Icon as={AntDesign} name='close' size='sm' color='gray.500' />}
                        />
                    </HStack>
                )}
            />
        </Box>
    );
};

export default Search;
