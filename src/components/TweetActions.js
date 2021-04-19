import { Box, HStack } from '@chakra-ui/layout'
import React from 'react'
import TweetActionIcon from './TweetActionIcon'
import {MessageOutlined, RetweetOutlined, HeartOutlined, UploadOutlined} from '@ant-design/icons';
import { connect } from 'react-redux';

function TweetActions({id, dispatch, msg, retweet, like}) {
    
    return (
        <Box >
            <HStack justifyContent='space-between' marginTop='2' maxW='425px' >
                <Box onClick={() => dispatch({type: 'MESSAGE_COUNT', payload: id})}>

                
                    <TweetActionIcon 
                        icon={<MessageOutlined />}
                        number={1}
                        color='blue'
                        styleBox='tweet_action_msg'
                        styleText='tweet_action_msg_text'
                        tooltip='Reply'
                        
                    />
                </Box>

                <Box onClick={() => dispatch({type: 'RETWEET_COUNT', payload: id})}>
                    <TweetActionIcon 
                        icon={<RetweetOutlined />}
                        number={retweet}
                        color='blue'
                        styleBox='tweet_action_retweet'
                        styleText='tweet_action_retweet_text'
                        tooltip='Retweet'
                        
                    />
                </Box>

                <Box onClick={() => dispatch({type: 'LIKE_COUNT', payload: id})}>
                    <TweetActionIcon 
                        icon={<HeartOutlined />}
                        number={like}
                        color='blue'
                        styleBox='tweet_action_love'
                        styleText='tweet_action_love_text'
                        tooltip='Like'
                        
                    />
                </Box> 

                <Box onClick={() => dispatch({type: 'SHARE_COUNT', payload: id})}>

                
                    <TweetActionIcon 
                        icon={<UploadOutlined />}
                        
                        color='blue'
                        styleBox='tweet_action_share'
                        styleText='tweet_action_share_text'
                        tooltip='Share'
                        
                    />
                </Box>
            </HStack>
            
        </Box>
    )
}
const mapStateToProps = (state) => ({
    state:state
})

export default connect(mapStateToProps) (TweetActions)
