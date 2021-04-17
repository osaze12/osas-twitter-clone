import { Button } from '@chakra-ui/button'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import { connect } from 'react-redux'
import HumanTime from 'react-human-time';

function TweetButton({is, dispatch}) {

    const handleButton = () => {
        const tweet = is.tweetText;
        
        if (tweet.length <= 120 && tweet.length > 3){
            
            const sendTweet = {
                comment: 0,
                id: is.liveTweet.length + 1,
                like: 0,
                retweet: 0,
                share: 0,
                text: is.tweetText,
                createdAt : <HumanTime time={new Date().getTime()} />
            }

            dispatch({type:'LIVE_TWEET', payload: sendTweet});
            dispatch({type: 'EMPTY_TWEET_TEXT'});
            return ;
        }
    }
    return (
        <Box onClick={handleButton}>
            <Button 
                
                isDisabled={is.disableButton} 
                _hover={{background: '#1da1f2'}} size='md'
                color='white' background='#1da1f2' 
                borderRadius='full'><b>Tweet</b></Button>
        </Box>
    )
}
const mapStateToProps = (state) => ({
    is: state
  })
export default connect(mapStateToProps) (TweetButton)
