import React from 'react';
import { Dimensions, StatusBar } from 'react-native';
import {
    Box,
    View,
    Text,
    FlatList,
    ScrollView,
    Avatar,
    Image,
    HStack,
    VStack,
    Icon,
    IconButton,
    Input,
    Divider,
    Pressable,
} from 'native-base';

import {
    AntDesign,
    Entypo,
    FontAwesome,
    EvilIcons,
    Feather,
} from 'react-native-vector-icons';

import StatusBarCustom from './StatusBarCustom';

const stories = [
    {
        id: '12345',
        userId: 'jjdldfdv',
        username: 'lambertkav',
        profileImg: require('../assets/lambert.jpg'),
    },
    {
        id: '32983',
        userId: 'ojejncur',
        username: 'joshua.chama',
        profileImg: require('../assets/joshua.jpg'),
    },
    {
        id: '442423',
        userId: 'jjdldfdv',
        username: 'chris-vibro',
        profileImg: require('../assets/chris.jpeg'),
    },
    {
        id: '94932',
        userId: 'ojejncur',
        username: 'osward',
        profileImg: require('../assets/osward.jpeg'),
    },
    {
        id: '737823',
        userId: 'jjdldfdv',
        username: 'benson_ben10',
        profileImg: require('../assets/benson.jpeg'),
    },
    {
        id: '84728',
        userId: 'ojejncur',
        username: 'jeorge',
        profileImg: require('../assets/jeorge.jpeg'),
    },
];

const posts = [
    {
        id: 'jjdldfdv',
        username: 'benson_ben10',
        location: 'Mukobeko, Zimbabwe',
        profileImg: require('../assets/benson.jpeg'),
        images: [
            require('../assets/benson.jpeg'),
            require('../assets/hess.jpeg'),
        ],
        likes: 250,
        caption: 'Yoh what up',
        comments: ['This is good', 'That was okay'],
    },
    {
        id: 'ojejncur',
        username: 'jeorge-kolwe',
        location: 'Katondo, Zambia',
        profileImg: require('../assets/jeorge.jpeg'),
        images: [require('../assets/jeorge.jpeg')],
        likes: 12300,
        caption: 'I love the way people try to make me feel safe like that',
        comments: ['This is good', 'That was okay'],
    },
    {
        id: 'hjeiuge3',
        username: 'terence.sims',
        location: 'Khapiri, Zambia',
        profileImg: require('../assets/lambert.jpg'),
        images: [
            require('../assets/urus.jpg'),
            require('../assets/lambert.jpg'),
            require('../assets/audi.jpg'),
        ],
        likes: 1,
        caption:
            'Cause this is how it has always been. But i love the way it is which is encouraging #hello',
        comments: ['This is good', 'That was okay'],
    },
    {
        id: 'dnanee',
        username: 'chris.luks',
        location: 'Chinama, Zambia',
        profileImg: require('../assets/chris.jpeg'),
        images: [
            require('../assets/td.png'),
            require('../assets/landscape.jpg'),
            require('../assets/macbook.jpg'),
            require('../assets/model_x.jpg'),
            require('../assets/chris.jpeg'),
        ],
        likes: 988,
        caption: 'I say less #life #myrules',
        comments: ['This is good', 'That was okay'],
    },
];

const deviceWidth = Dimensions.get('window').width;

const HomeContent = ({ navigation }) => {
    return (
        <View flex={1} bg="white" w="full">
            <StatusBarCustom bgColor="white" contentColor="dark-content" />
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <Box w="full">
                        <ScrollView
                            horizontal
                            w="full"
                            showsHorizontalScrollIndicator={false}
                        >
                            <VStack
                                px="2"
                                alignSelf="center"
                                justifyContent="center"
                            >
                                <Box>
                                    <Image
                                        source={require('../assets/hess.jpeg')}
                                        alt="hess"
                                        w="61.5px"
                                        h="61.5px"
                                        rounded="full"
                                        my="2px"
                                    />

                                    <Box
                                        position="absolute"
                                        bottom="0"
                                        right="0"
                                        bg="white" // to make sure the plus is white
                                        borderWidth="3.5px"
                                        borderColor="white"
                                        rounded="full"
                                    >
                                        <Icon
                                            as={AntDesign}
                                            name="pluscircle"
                                            color="blue.400"
                                            size="20px"
                                        />
                                    </Box>
                                </Box>
                                <Text fontSize="xs">Your story</Text>
                            </VStack>
                            {stories.map((story, idx) => (
                                <VStack
                                    key={story?.id}
                                    px="2"
                                    alignItems="center"
                                >
                                    <Box
                                        w="66.5px"
                                        h="66.5px"
                                        bg={{
                                            linearGradient: {
                                                colors: ['#ffc400', '#dd00bc'],
                                                start: [0, 1],
                                                end: [1, 0],
                                            },
                                        }}
                                        rounded="33"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Pressable
                                            w="66.5px"
                                            h="66.5px"
                                            rounded="full"
                                            bg={{
                                                linearGradient: {
                                                    colors: [
                                                        'lightBlue.300',
                                                        'violet.800',
                                                    ],
                                                    start: [0, 0],
                                                    end: [1, 0],
                                                },
                                            }}
                                            // top='0'
                                            justifyContent="center"
                                            alignItems="center"
                                            onPress={() =>
                                                navigation.navigate('Stories', {
                                                    userId: story.userId,
                                                    storyId: story.id,
                                                })
                                            }
                                        >
                                            <Image
                                                source={story?.profileImg}
                                                alt={`profile${idx}`}
                                                w="61.5px"
                                                h="61.5px"
                                                resizeMode="cover"
                                                rounded="full"
                                                borderColor="white"
                                                borderWidth="2.5px"
                                            />
                                        </Pressable>
                                    </Box>
                                    <Text fontSize="xs" textAlign="center">
                                        {story?.username}
                                    </Text>
                                </VStack>
                            ))}
                        </ScrollView>
                        <Divider mt="2" bg="coolGray.200" />
                    </Box>
                }
                ListFooterComponent={<Box pb="10" />}
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Box w="full" pb="12px">
                        <HStack
                            px="2"
                            pt="2"
                            pb="2"
                            space={2}
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <HStack space={2}>
                                <Box
                                    w="39px"
                                    h="39px"
                                    justifyContent="center"
                                    alignItems="center"
                                    bg={{
                                        linearGradient: {
                                            colors: ['#ffc400', '#dd00bc'],
                                            start: [0, 1],
                                            end: [1, 0],
                                        },
                                    }}
                                    rounded="20"
                                >
                                    <Image
                                        source={item?.profileImg}
                                        alt={`${item.username}`}
                                        w="35px"
                                        h="35px"
                                        rounded="full"
                                        borderWidth="1.5px"
                                        borderColor="white"
                                    />
                                </Box>
                                <VStack justifyContent="center">
                                    <Text fontWeight="bold" fontSize="xs">
                                        {item.username}
                                    </Text>
                                    {item?.location && (
                                        <Text fontSize="xs">
                                            {item.location}
                                        </Text>
                                    )}
                                </VStack>
                            </HStack>
                            <Icon
                                as={Entypo}
                                name="dots-three-horizontal"
                                size="sm"
                                color="black"
                            />
                        </HStack>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            pagingEnabled
                            w="100%"
                            h="400"
                        >
                            {item.images.map((img, i) => (
                                <Image
                                    key={i}
                                    source={img}
                                    alt={`post${i}`}
                                    w={deviceWidth ? deviceWidth : 400}
                                    h="full"
                                    resizeMode="cover"
                                />
                            ))}
                        </ScrollView>
                        <HStack
                            px="1"
                            pt="1"
                            justifyContent="space-between"
                            alignItems="center"
                            w="full"
                        >
                            <HStack space="0" w="1/3">
                                <IconButton
                                    size="xs"
                                    icon={
                                        <Icon
                                            as={AntDesign}
                                            name="heart"
                                            color="red.600"
                                            size="md"
                                        />
                                    }
                                />
                                <IconButton
                                    size="xs"
                                    icon={
                                        <Icon
                                            as={EvilIcons}
                                            name="comment"
                                            color="black"
                                            size="xl"
                                        />
                                    }
                                />
                                <IconButton
                                    size="xs"
                                    icon={
                                        <Icon
                                            as={Feather}
                                            name="send"
                                            color="black"
                                            size="md"
                                        />
                                    }
                                />
                            </HStack>
                            <HStack w="1/3" space="1">
                                {item?.images?.map((img, idx) => (
                                    <Box
                                        key={idx}
                                        w="6px"
                                        h="6px"
                                        rounded="full"
                                        bg={idx === 0 ? 'blue.400' : 'gray.300'}
                                    />
                                ))}
                            </HStack>
                            <Icon
                                w="1/3"
                                as={FontAwesome}
                                name="bookmark-o"
                                size="md"
                                color="black"
                            />
                        </HStack>
                        <VStack px="3">
                            <HStack alignItems="center" space={2}>
                                <Image
                                    source={item?.profileImg}
                                    alt="Something"
                                    w="17px"
                                    h="17px"
                                    rounded="full"
                                />
                                <Text fontSize="sm">
                                    Like by{' '}
                                    <Text fontWeight="bold">osward</Text> and{' '}
                                    <Text fontWeight="bold">{item?.likes}</Text>{' '}
                                    others.
                                </Text>
                            </HStack>
                            <Text pt="1" fontSize="sm">
                                <Text fontWeight="bold">{item.username}</Text>{' '}
                                {item?.caption}
                            </Text>
                            <Text py="0.5" color="gray.400">
                                View all {item?.comments?.length} comments
                            </Text>
                            <HStack
                                pt="0"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <HStack alignItems="center" w="4/5">
                                    <Image
                                        source={require('../assets/hess.jpeg')}
                                        alt="Anything"
                                        w="20px"
                                        h="20px"
                                        rounded="full"
                                    />
                                    <Input
                                        w="90%"
                                        placeholder="Add a comment"
                                        borderWidth="0"
                                        _focus={{ bg: 'transparent' }}
                                    />
                                </HStack>
                                <HStack w="1/5" alignItems="center" space="3">
                                    <Text>❤️{'   '}🙌🏾</Text>
                                    <Icon
                                        as={AntDesign}
                                        name="pluscircleo"
                                        size="xs"
                                    />
                                </HStack>
                            </HStack>
                            <Text
                                fontSize="xs"
                                color="gray.600"
                                fontWeight="hairline"
                            >
                                10 hourse ago
                            </Text>
                        </VStack>
                    </Box>
                )}
            />
        </View>
    );
};

export default HomeContent;
