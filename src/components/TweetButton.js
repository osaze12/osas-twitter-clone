import { Button } from '@chakra-ui/button'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import { connect } from 'react-redux'
import HumanTime from 'react-human-time';

function TweetButton({is, dispatch, tweet_is_in_modal}) {

    const handleButton = () => {
        const tweet = is.tweetText;
        
        if (tweet.length <= 200 && tweet.length > 3){
            
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

            // YOU WANT TO CLOSE THE MODAL WHEN USER CLICKS TWEET BUTTON
            tweet_is_in_modal === true && dispatch({type:'MODAL', payload: false});
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
