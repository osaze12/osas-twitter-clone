
import { Box } from '@chakra-ui/layout'
import { Input } from 'antd';
import './InputTweet.css';
import React from 'react'
import InputMedia from './InputMedia'
import { connect } from 'react-redux';


function InputTweet({allowInputMedia, normalInput, disabled, dispatch, state }) {

    const { TextArea } = Input;
    
    //CHECK INPUT STRING LENGTH
    const handleValue = (input) => {
        const tweet = input.target.value;
        dispatch({type:'TWEET_TEXT', payload: tweet});

        const length = tweet.length;
        if (length > 120 || length < 3){
            return dispatch({type: 'DISABLEBUTTON', payload: true});
        }

        const tweetData = {
            text: tweet,
        }

        dispatch({type: 'DISABLEBUTTON', payload: false});

        dispatch({type: 'TEMPORAL_TWEET', payload: tweetData});
    }
    return (
        <Box width='100%'>
            <Box marginBottom='5'>
                <TextArea
                    // value={handleValue}
                    value={state.tweetText}
                    onChange={handleValue}
                    placeholder="What's happening?"
                    size='large'
                    autoSize={normalInput ? true  : { minRows: 3, maxRows: 7 }}
                    
                    bordered={false}
                    maxLength='120'
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
