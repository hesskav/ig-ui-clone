import React from 'react';
import { Dimensions } from 'react-native';
import {
    Box,
    Text,
    FlatList,
    ScrollView,
    VStack,
    HStack,
    Button,
    Icon,
    IconButton,
    Image,
    Pressable,
    Divider,
} from 'native-base';
import {
    AntDesign,
    MaterialCommunityIcons,
    MaterialIcons,
} from 'react-native-vector-icons';

import StatusBarCustom from './StatusBarCustom';

const images = [
    {
        id: '1u3892',
        src: require('../assets/urus.jpg'),
    },
    {
        id: '39242n',
        src: require('../assets/macbook.jpg'),
    },
    {
        id: '043094d',
        src: require('../assets/landscape.jpg'),
    },
    {
        id: '423489f',
        src: require('../assets/jeorge.jpeg'),
    },
    {
        id: '83424h',
        src: require('../assets/audi.jpg'),
    },
    {
        id: '9249834c',
        src: require('../assets/re-emblem.jpg'),
    },
    {
        id: 'revwrvr34',
        src: require('../assets/td.png'),
    },
    {
        id: '242434n',
        src: require('../assets/model_x.jpg'),
    },
    {
        id: 'vsdfvfvr',
        src: require('../assets/urus.jpg'),
    },
    {
        id: 'wdcccer',
        src: require('../assets/chris.jpeg'),
    },
    {
        id: 'juynynh',
        src: require('../assets/lambert.jpg'),
    },
];

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const peopleToDiscover = [
    {
        id: '3ihdied',
        img: require('../assets/lambert.jpg'),
        name: 'Terence Tersim',
    },
    {
        id: 'idwi384',
        img: require('../assets/benson.jpeg'),
        name: 'Benson Bwalya',
    },
    {
        id: 'kncjernc94',
        img: require('../assets/joshua.jpg'),
        name: 'Joshua Chama',
    },
    {
        id: 'ori2ir2',
        img: require('../assets/osward.jpeg'),
        name: 'Rasford Ngosa',
    },
    {
        id: 'acojcer',
        img: require('../assets/jeorge.jpeg'),
        name: 'Wanga Kabwalala',
    },
    {
        id: 'bvejffr',
        img: require('../assets/hess.jpeg'),
        name: 'Jace',
    },
];

const Profile = () => {
    return (
        <Box flex={1} bg="white">
            <StatusBarCustom bgColor="white" contentColor="dark-content" />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={images}
                numColumns={3}
                keyExtractor={(item) => item.id}
                ListFooterComponent={<Box mb="10" />}
                ListHeaderComponent={
                    <Box px="3">
                        <HStack justifyContent="space-between">
                            <Box>
                                <Image
                                    source={require('../assets/hess.jpeg')}
                                    alt="profile"
                                    w="20"
                                    h="20"
                                    rounded="full"
                                />
                                <Box
                                    position="absolute"
                                    bottom="0"
                                    right="0"
                                    borderWidth="1.5px"
                                    rounded="full"
                                    borderColor="white"
                                    bg="white"
                                >
                                    <Icon
                                        as={AntDesign}
                                        name="pluscircle"
                                        color="blue.400"
                                        size="21px"
                                    />
                                </Box>
                            </Box>
                            <HStack space={6} pr="4">
                                <VStack
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Text fontWeight="bold" fontSize="md">
                                        69
                                    </Text>
                                    <Text mt="-1">Posts</Text>
                                </VStack>
                                <VStack
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Text fontWeight="bold" fontSize="md">
                                        1.5B
                                    </Text>
                                    <Text mt="-1">Followers</Text>
                                </VStack>
                                <VStack
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Text fontWeight="bold" fontSize="md">
                                        96
                                    </Text>
                                    <Text mt="-1">Following</Text>
                                </VStack>
                            </HStack>
                        </HStack>
                        <VStack px="1">
                            <Text fontWeight="bold" pt="2">
                                Hess Kav
                            </Text>
                            <Text>
                                This is like having friends at a party bro!
                            </Text>
                            <HStack
                                w="full"
                                pt="3"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Pressable
                                    w="89%"
                                    h="8"
                                    justifyContent="center"
                                    alignItems="center"
                                    bg="gray.200"
                                    _pressed={{ bg: 'gray.300' }}
                                    rounded="lg"
                                >
                                    <Text fontWeight="semibold">
                                        Edit Profile
                                    </Text>
                                </Pressable>
                                <IconButton
                                    bg="gray.100"
                                    rounded="lg"
                                    size="xs"
                                    _pressed={{ bg: 'gray.200' }}
                                    icon={
                                        <Icon
                                            as={MaterialCommunityIcons}
                                            name="account-plus"
                                            size="md"
                                            color="black"
                                        />
                                    }
                                />
                            </HStack>
                            <VStack pt="6">
                                <HStack
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Text fontSize="13" fontWeight="bold">
                                        Discover People
                                    </Text>
                                    <Text
                                        fontSize="13"
                                        fontWeight="bold"
                                        color="lightBlue.500"
                                    >
                                        See All
                                    </Text>
                                </HStack>
                                <ScrollView
                                    pt="3"
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {peopleToDiscover.map((person, idx) => (
                                        <VStack
                                            key={person.id}
                                            borderWidth="1"
                                            borderColor="gray.200"
                                            rounded="md"
                                            w="150"
                                            h="210"
                                            mr="1"
                                            px="3"
                                            pb="2"
                                            pt="3"
                                            alignItems="center"
                                            justifyContent="space-between"
                                        >
                                            <IconButton
                                                position="absolute"
                                                top="0"
                                                right="0"
                                                rounded="full"
                                                icon={
                                                    <Icon
                                                        as={AntDesign}
                                                        name="close"
                                                        size="xs"
                                                        color="gray.700"
                                                    />
                                                }
                                            />
                                            <Image
                                                source={person?.img}
                                                alt="pic"
                                                w="20"
                                                h="20"
                                                rounded="full"
                                            />
                                            <VStack alignItems="center">
                                                <Text fontWeight="bold">
                                                    {person.name}
                                                </Text>
                                                <Text
                                                    fontSize="xs"
                                                    color="gray.400"
                                                >
                                                    Follows you
                                                </Text>
                                            </VStack>
                                            <Pressable
                                                bg="blue.500"
                                                rounded="md"
                                                w="full"
                                                h="7"
                                                justifyContent="center"
                                                alignItems="center"
                                                _pressed={{ bg: 'blue.600' }}
                                            >
                                                <Text
                                                    fontWeight="semibold"
                                                    color="white"
                                                >
                                                    Follow Back
                                                </Text>
                                            </Pressable>
                                        </VStack>
                                    ))}
                                </ScrollView>
                            </VStack>
                            <HStack pt="5" space={5}>
                                <Box
                                    w="62px"
                                    h="62px"
                                    bg="gray.300"
                                    rounded="full"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Image
                                        source={require('../assets/urus.jpg')}
                                        alt="urus"
                                        w="60px"
                                        h="60px"
                                        rounded="full"
                                        resizeMode="cover"
                                        borderWidth="2.5px"
                                        borderColor="white"
                                    />
                                </Box>

                                <Box
                                    w="61px"
                                    h="61px"
                                    borderWidth="1px"
                                    borderColor="gray.300"
                                    rounded="full"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Icon
                                        as={AntDesign}
                                        name="plus"
                                        size="lg"
                                        color="black"
                                    />
                                </Box>
                            </HStack>
                        </VStack>
                        <HStack
                            pt="6"
                            w="full"
                            justifyContent="space-between"
                            pb="1px"
                        >
                            <VStack w="1/3" alignItems="center">
                                <Icon
                                    as={MaterialIcons}
                                    name="grid-on"
                                    size="lg"
                                    color="black"
                                    mb="2"
                                />
                                <Divider w="full" h="1px" bg="black" />
                            </VStack>
                            <VStack w="1/3" alignItems="center">
                                <Icon
                                    as={AntDesign}
                                    name="instagram"
                                    size="lg"
                                    mb="2"
                                />
                            </VStack>
                            <VStack w="1/3" alignItems="center">
                                <Icon
                                    as={MaterialCommunityIcons}
                                    name="account-box-outline"
                                    size="lg"
                                    mb="2"
                                />
                            </VStack>
                        </HStack>
                    </Box>
                }
                renderItem={({ item }) => (
                    <Box
                        key={item.id}
                        w="1/3"
                        h={deviceWidth * 0.33}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image
                            source={item.src}
                            alt={item.id}
                            w="99%"
                            h="99%"
                            resizeMode="cover"
                        />
                    </Box>
                )}
            />
        </Box>
    );
};

export default Profile;
