
import { Box } from '@chakra-ui/layout'
import { Input } from 'antd';
import './InputTweet.css';
import React from 'react'
import InputMedia from './InputMedia'
import { connect } from 'react-redux';
import './InputTweet.css'


function InputTweet({allowInputMedia, normalInput, disabled, dispatch, state }) {

    const { TextArea } = Input;
    
    //CHECK INPUT STRING LENGTH
    const handleValue = (input) => {
        const tweet = input.target.value;
        dispatch({type:'TWEET_TEXT', payload: tweet});

        const length = tweet.length;
        if (length > 200 || length < 4){
            return dispatch({type: 'DISABLEBUTTON', payload: true});
        }

        const tweetData = {
            text: tweet,
        }

        dispatch({type: 'DISABLEBUTTON', payload: false});

        dispatch({type: 'TEMPORAL_TWEET', payload: tweetData});
    }
    return (
        <Box width='100%' className='input_tweet'>
            <Box marginBottom='5'>
                <TextArea
                    // value={handleValue}
                    value={state.tweetText}
                    onChange={handleValue}
                    placeholder="What's happening?"
                    size='large'
                    autoSize={normalInput ? true  : { minRows: 3, maxRows: 7 }}
                    
                    bordered={false}
                    maxLength='200'
                    id='textArea'
                    // disabled={disabled}
                />
            </Box>
        
            {allowInputMedia && <InputMedia /> }
        </Box>
    )
}
const mapStateToProps = (state) => ({
    state: state
  })
export default connect(mapStateToProps) (InputTweet)
