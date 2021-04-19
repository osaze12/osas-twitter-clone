import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/layout'
import React from 'react'
import UserProfile from './left_navigation/UserProfile'
import './Message.css'

function Message({name, username, date, msg}) {
    return (
        <Box  alignItems='center' className='message'>
            <Box padding='5'>
                <Flex justifyContent='space-between'>
                    <HStack >
                        <UserProfile />
                        
                        <VStack alignItems='flex-start' spacing='-1'>
                            <HStack>
                                <Text fontWeight='bold'>{name}</Text>
                                <Text color='#5b7083'>{username}</Text>
                            </HStack>
                            <Text color='#5b7083' fontSize='sm'>{msg}</Text>
                        </VStack>
                    </HStack>
                    
                    <Text color='#5b7083'>{date}</Text>

                </Flex>
            </Box>
            
        </Box>
    )
}

export default Message
