import React from 'react';
import { Box, Text } from 'native-base';

import StatusBarCustom from './StatusBarCustom';

const CreatePost = () => {
    return (
        <Box bg='white' flex={1} justifyContent='center' alignItems='center'>
            <StatusBarCustom bgColor='white' contentColor='dark-content' />
            <Text fontSize='2xl' fontWeight='bold'>Create a Post</Text>
        </Box>
    );
};

export default CreatePost;
