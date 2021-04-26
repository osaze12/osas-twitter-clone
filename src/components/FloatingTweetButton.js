import { Box } from '@chakra-ui/layout'
import React from 'react'
import NewTweet from './left_navigation/NewTweet';
import './FloatingTweetButton.css'
import { connect } from 'react-redux';

function FloatingTweetButton(props) {
    return (
        <Box className='floating_button' onClick={() => props.dispatch({type:'IS_MOBILE', payload: true})}>
            <NewTweet tooltip='Tweet' w='65px' h='65px' setSize='27px' />
        </Box>
    )
}

export default connect() (FloatingTweetButton)
