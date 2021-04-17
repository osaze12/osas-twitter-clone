import { Box, HStack } from '@chakra-ui/layout'
import React from 'react'
import TweetActionIcon from './TweetActionIcon'
import {MessageOutlined, RetweetOutlined, HeartOutlined, UploadOutlined} from '@ant-design/icons';

function TweetActions() {
    
    return (
        <Box >
            <HStack justifyContent='space-between' marginTop='2' maxW='425px' >
                <TweetActionIcon 
                    icon={<MessageOutlined />}
                    number={5}
                    color='blue'
                    styleBox='tweet_action_msg'
                    styleText='tweet_action_msg_text'
                    tooltip='Reply'
                    
                />

                <TweetActionIcon 
                    icon={<RetweetOutlined />}
                    number={6}
                    color='blue'
                    styleBox='tweet_action_retweet'
                    styleText='tweet_action_retweet_text'
                    tooltip='Retweet'
                    
                />

                <TweetActionIcon 
                    icon={<HeartOutlined />}
                    number={5}
                    color='blue'
                    styleBox='tweet_action_love'
                    styleText='tweet_action_love_text'
                    tooltip='Like'
                    
                />

                <TweetActionIcon 
                    icon={<UploadOutlined />}
                    
                    color='blue'
                    styleBox='tweet_action_share'
                    styleText='tweet_action_share_text'
                    tooltip='Share'
                    
                />
            </HStack>
            
        </Box>
    )
}

export default TweetActions
