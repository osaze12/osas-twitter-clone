import { Button } from '@chakra-ui/button'
import { Box } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import HumanTime from 'react-human-time';

function TweetButton({is, dispatch, tweet_is_in_modal, dataTweet}) {
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        if (!dataTweet) return ;
        if (dataTweet.length < 4 || dataTweet.length > 200){
            return setIsDisabled(true);
        }
        setIsDisabled(false);
    },[dataTweet])
    

    const handleButton = () => {
        if (dataTweet.length <= 200 && dataTweet.length > 3){
            const sendTweet = {
                comment: 0,
                id: is.liveTweet.length + 1,
                like: 0,
                retweet: 0,
                retweeterName: null,
                share: 0,
                text:dataTweet,
                createdAt : <HumanTime time={new Date().getTime()} />
            }

            dispatch({type:'LIVE_TWEET', payload: sendTweet});
            dispatch({type: 'EMPTY_TWEET_TEXT', payload: true});

            // YOU WANT TO CLOSE THE MODAL WHEN USER CLICKS TWEET BUTTON
            tweet_is_in_modal === true && dispatch({type:'MODAL', payload: false});
            return ;
        }
    }
    return (
        <Box onClick={handleButton}>
            <Button 
                isDisabled={isDisabled} 
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
