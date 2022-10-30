import React, { useState, useEffect } from 'react';
import { Dimensions, StatusBar } from 'react-native';
import {
    Box,
    Text,
    FlatList,
    ScrollView,
    Image,
    VStack,
    HStack,
    Progress,
    Icon,
    IconButton,
    Input,
} from 'native-base';

import { Entypo, AntDesign, Feather } from 'react-native-vector-icons';

import StatusBarCustom from './StatusBarCustom';

const stories = [
    {
        id: '12345',
        userId: 'jjdldfdv',
        username: 'lambertkav',
        profileImg: require('../assets/lambert.jpg'),
        images: [
            require('../assets/urus.jpg'),
            require('../assets/jeorge.jpeg'),
            require('../assets/macbook.jpg'),
        ],
    },
    {
        id: '32983',
        userId: 'ojejncur',
        username: 'joshua.chama',
        profileImg: require('../assets/joshua.jpg'),
        images: [
            require('../assets/house.jpg'),
            require('../assets/re-emblem.jpg'),
        ],
    },
    {
        id: '442423',
        userId: 'jjdldfdv',
        username: 'chris-vibro',
        profileImg: require('../assets/chris.jpeg'),
        images: [
            require('../assets/td.png'),
            require('../assets/model_x.jpg'),
            require('../assets/audi.jpg'),
            require('../assets/re-emblem.jpg'),
        ],
    },
    {
        id: '94932',
        userId: 'ojejncur',
        username: 'osward',
        profileImg: require('../assets/osward.jpeg'),
        images: [require('../assets/pc.webp'), require('../assets/audi.jpg')],
    },
    {
        id: '737823',
        userId: 'jjdldfdv',
        username: 'benson_ben10',
        profileImg: require('../assets/benson.jpeg'),
        images: [require('../assets/landscape.jpg')],
    },
    {
        id: '84728',
        userId: 'ojejncur',
        username: 'jeorge',
        profileImg: require('../assets/jeorge.jpeg'),
        images: [
            require('../assets/audi.jpg'),
            require('../assets/macbook.jpg'),
            require('../assets/hess.jpeg'),
        ],
    },
];

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Stories = ({ route, navigation }) => {
    const { userId, storyId } = route.params;

    const [story, setStory] = useState(null);

    useEffect(() => {
        setStory(() => stories.filter((story) => story.id === storyId)[0]);
    }, [storyId]);

    // console.log(story);

    return (
        <Box flex={1} bg="black">
            <StatusBarCustom bgColor="black" contentColor="light-content" />
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                {story?.images?.map((image, idx) => (
                    <Image
                        key={idx}
                        source={image && image}
                        alt="profile"
                        w={deviceWidth}
                        h="full"
                        resizeMode="contain"
                    />
                ))}
            </ScrollView>
            <VStack
                safeArea
                w={deviceWidth}
                position="absolute"
                top="5"
                alignItems="center"
            >
                <HStack
                    space={1}
                    w={deviceWidth}
                    px="3"
                    justifyContent="center"
                >
                    {story?.images?.map((img, idx) => (
                        <Progress
                            key={idx}
                            h="2px"
                            w={story?.images?.length > 1 ? `1/${story?.images?.length}` : 'full'}
                            value={idx === 0 ? 45 : 0}
                            bg="gray.400:alpha.50"
                            _filledTrack={{ bg: 'gray.300' }}
                        />
                    ))}
                </HStack>
                <HStack
                    w="full"
                    alignItems="center"
                    justifyContent="space-between"
                    pt="2"
                    px="3"
                >
                    <HStack alignItems="center" space="2">
                        <Image
                            source={
                                story?.profileImg
                                    ? story?.profileImg
                                    : require('../assets/hess.jpeg')
                            }
                            alt="profile"
                            w="7"
                            h="7"
                            rounded="full"
                            resizeMode="cover"
                        />
                        <Text color="white" fontWeight="semibold">
                            {story?.username}
                        </Text>
                        <Text color="gray.400">3h</Text>
                    </HStack>
                    <HStack alignItems="center" space={5}>
                        <Icon
                            as={Entypo}
                            size="sm"
                            name="dots-three-horizontal"
                            color="white"
                        />
                        <IconButton
                            icon={
                                <Icon
                                    as={AntDesign}
                                    size="xl"
                                    name="close"
                                    color="white"
                                />
                            }
                            onPress={() => navigation.goBack()}
                        />
                    </HStack>
                </HStack>
            </VStack>
            <VStack safeArea position="absolute" bottom="4" w="full" px="3">
                <HStack
                    w="full"
                    justifyContent="space-between"
                    alignItems="center"
                    space="4"
                >
                    <Input
                        size="lg"
                        placeholder="Send message"
                        variant="rounded"
                        w="75%"
                        h="45px"
                        borderWidth="1px"
                        borderColor="gray.500"
                        placeholderTextColor="white"
                        pl="5"
                        color="white"
                        _focus={{ borderColor: 'gray.500', bg: 'transparent' }}
                    />
                    <HStack
                        w="20%"
                        alignItems="center"
                        justifyContent="center"
                        space="4"
                    >
                        <Icon
                            as={AntDesign}
                            name="hearto"
                            size="lg"
                            color="white"
                        />
                        <Icon
                            as={Feather}
                            name="send"
                            size="lg"
                            color="white"
                        />
                    </HStack>
                </HStack>
            </VStack>
        </Box>
    );
};

export default Stories;
