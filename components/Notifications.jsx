import React from 'react';
import {
    Box,
    HStack,
    VStack,
    View,
    Text,
    Image,
    Button,
    Icon,
    IconButton,
    ScrollView,
    Divider,
} from 'native-base';

import { AntDesign } from 'react-native-vector-icons';

import StatusBarCustom from './StatusBarCustom';

const notifications = {
    today: [
        {
            image: require('../assets/jeorge.jpeg'),
            type: 'likes',
            likes: 20302,
            users: ['jeorge.500', 'benson_ben10'],
            time: '7h',
        },
        {
            image: require('../assets/osward.jpeg'),
            type: 'likes',
            likes: 1,
            users: ['osward.323'],
            time: '2h',
        },
        {
            image: require('../assets/hess.jpeg'),
            type: 'comments',
            likes: 1,
            users: ['hess.dalika'],
            time: '10h',
        },
        {
            image: require('../assets/benson.jpeg'),
            type: 'comments',
            likes: 1,
            users: ['ben10.opoe'],
            time: '1h',
        },
        {
            image: require('../assets/chris.jpeg'),
            type: 'likes',
            likes: 10,
            users: ['chris.323', 'wangalala.0'],
            time: '2h',
        },
    ],
    yesterday: [
        {
            image: require('../assets/lambert.jpg'),
            type: 'likes',
            likes: 392,
            users: ['lambert.42', 'gurnsd.43'],
            time: '2d',
        },
        {
            image: require('../assets/benson.jpeg'),
            type: 'likes',
            likes: 1,
            users: ['benson_ben10'],
            time: '2d',
        },
    ],
    suggested: [
        {
            image: require('../assets/benson.jpeg'),
            username: 'benson_ben10',
            name: 'Benson Bwalya',
            followers: ['yumba', 'joshua', 'lambert'],
        },
        {
            image: require('../assets/hess.jpeg'),
            username: 'hess-kav',
            name: 'Hess Kav',
            followers: ['joseph', 'sometimes', 'mighty'],
        },
        {
            image: require('../assets/chris.jpeg'),
            username: 'chris-21',
            name: 'Christopher',
            followers: ['rasford', 'joshua', 'terence'],
        },
        {
            image: require('../assets/osward.jpeg'),
            username: 'osward',
            name: 'Osward Chanda',
            followers: ['terence', 'yumba', 'lambert'],
        },
        {
            image: require('../assets/benson.jpeg'),
            username: 'benson_ben10',
            name: 'Benson Bwalya',
            followers: ['yumba', 'joshua', 'lambert'],
        },
        {
            image: require('../assets/hess.jpeg'),
            username: 'hess-kav',
            name: 'Hess Kav',
            followers: ['joseph', 'sometimes', 'mighty'],
        },
        {
            image: require('../assets/chris.jpeg'),
            username: 'chris-21',
            name: 'Christopher',
            followers: ['rasford', 'joshua', 'terence'],
        },
        {
            image: require('../assets/osward.jpeg'),
            username: 'osward',
            name: 'Osward Chanda',
            followers: ['terence', 'yumba', 'lambert'],
        },
    ],
};

const Notifications = () => {
    return (
        <ScrollView flex={1} bg="white" showsVerticalScrollIndicator={false}>
            <StatusBarCustom bgColor="white" contentColor="dark-content" />
            <VStack w="full">
                <Text fontWeight="bold" px="3" fontSize="md" pb="3" pt="2">
                    Today
                </Text>
                {notifications?.today?.map((notif, idx) => (
                    <HStack
                        key={idx}
                        w="full"
                        px="3"
                        py="2"
                        alignItems="center"
                    >
                        <Image
                            source={notif?.image}
                            alt={`pic${idx}`}
                            resizeMode="cover"
                            w="10"
                            h="10"
                            rounded="full"
                        />
                        {notif?.type === 'likes' && (
                            <Text pl="4" w="85%">
                                {notif?.users?.length > 1 ? (
                                    <Text fontWeight="bold">{`${notif?.users[0]}, ${notif?.users[1]}`}</Text>
                                ) : (
                                    <Text fontWeight="bold">
                                        {notif?.users[0]}
                                    </Text>
                                )}
                                {notif?.likes > 1 && (
                                    <Text fontWeight="bold">
                                        {''}{' '}
                                        <Text fontWeight="normal">and</Text>{' '}
                                        {notif?.likes} others
                                    </Text>
                                )}{' '}
                                liked your post.
                                <Text color="gray.500">{` ${notif?.time}`}</Text>
                            </Text>
                        )}
                        {notif?.type === 'comments' && (
                            <Text pl="4" w="85%">
                                <Text fontWeight="bold">{notif?.users[0]}</Text>{' '}
                                commented on your post.
                                <Text color="gray.500">{` ${notif?.time}`}</Text>
                            </Text>
                        )}
                    </HStack>
                ))}
                <Divider bg="gray.200" />
                <Text fontWeight="bold" fontSize="md" px="3" pb="3" pt="1">
                    Yesterday
                </Text>
                {notifications?.yesterday?.map((notif, idx) => (
                    <HStack
                        key={idx}
                        w="full"
                        px="3"
                        py="2"
                        alignItems="center"
                    >
                        <Image
                            source={notif?.image}
                            alt={`pic${idx}`}
                            resizeMode="cover"
                            w="10"
                            h="10"
                            rounded="full"
                        />
                        {notif?.type === 'likes' && (
                            <Text pl="4" w="85%">
                                {notif?.users?.length > 1 ? (
                                    <Text fontWeight="bold">{`${notif?.users[0]}, ${notif?.users[1]}`}</Text>
                                ) : (
                                    <Text fontWeight="bold">
                                        {notif?.users[0]}
                                    </Text>
                                )}
                                {notif?.likes > 1 && (
                                    <Text fontWeight="bold">
                                        {''}{' '}
                                        <Text fontWeight="normal">and</Text>{' '}
                                        {notif?.likes} others
                                    </Text>
                                )}{' '}
                                liked your post.
                                <Text color="gray.500">{` ${notif?.time}`}</Text>
                            </Text>
                        )}
                        {notif?.type === 'comments' && (
                            <Text pl="4" w="85%">
                                <Text fontWeight="bold">{notif?.users[0]}</Text>{' '}
                                commented on your post.
                                <Text color="gray.500">{` ${notif?.time}`}</Text>
                            </Text>
                        )}
                    </HStack>
                ))}
                <Divider bg="gray.200" />
                <Text fontWeight="bold" fontSize="md" px="3" pb="3" pt="1">
                    Suggested for you
                </Text>
                {notifications?.suggested?.map((notif, idx) => (
                    <HStack
                        key={idx}
                        w="full"
                        px="3"
                        py="2"
                        alignItems="center"
                        justifyContent='space-between'
                        space={1}
                    >
                        <HStack w='65%'>
                            <Image
                                source={notif?.image}
                                alt={`pic${idx}`}
                                resizeMode="cover"
                                w="10"
                                h="10"
                                rounded="full"
                            />
                            <VStack space="0" px="4">
                                <Text fontSize="xs" fontWeight="bold">
                                    {notif?.username}
                                </Text>
                                <Text fontSize="sm" mt="-4px" color='gray.400'>
                                    {notif?.name}
                                </Text>
                                <Text fontSize="xs" mt="-4px" color='gray.400'>
                                    Followed by {notif?.followers[0]}{' '}
                                    {notif?.followers?.length > 1 && (
                                        <Text>
                                            +{notif?.followers?.length - 1} more
                                        </Text>
                                    )}
                                </Text>
                            </VStack>
                        </HStack>
                        <HStack w='35%'>
                            <Button size='sm' bg='darkBlue.400' rounded='lg' w='80%' h='8' _text={{ fontWeight: 'bold'}}>Follow</Button>
                            <IconButton icon={<Icon as={AntDesign} size='sm' name='close' color='gray.500' />} />
                        </HStack>
                    </HStack>
                ))}
            </VStack>
        </ScrollView>
    );
};

export default Notifications;
