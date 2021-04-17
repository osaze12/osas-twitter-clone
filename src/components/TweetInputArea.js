import { Box, Flex} from '@chakra-ui/layout'
import React from 'react'
import InputTweet from './InputTweet'
import UserProfile from './left_navigation/UserProfile'

function TweetInputArea() {
    return (
        <Box borderWidth='1px' padding='3'>
            <Flex>
                <Box>
                    <UserProfile paddingright={true} />
                </Box>
                
                <Box flex='1'>
                    <InputTweet allowInputMedia={true} normalInput={true} />
                </Box>
            </Flex>

        </Box>
    )
}

export default TweetInputArea
