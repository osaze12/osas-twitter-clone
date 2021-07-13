
import { Box } from '@chakra-ui/layout'
import { Input } from 'antd';
import './InputTweet.css';
import React, { useEffect, useState } from 'react'
import InputMedia from './InputMedia'
import { connect } from 'react-redux';
import './InputTweet.css'


function InputTweet({allowInputMedia, normalInput, disabled, dispatch, state, parentCallback, is_modal }) {
    const { TextArea } = Input;
    const [tweetText, setTweetText] = useState('');
    



   //CLEAR INPUT WHEN THE TWEET BUTTON IS PUSHED
    useEffect(()=> {
        if (state.shouldEmptyTextInput === true){
           setTweetText('');
           dispatch({type: 'EMPTY_TWEET_TEXT', payload: false});
        }
    }, [state.shouldEmptyTextInput])
    


    const handleTweetText = (e) => {
        setTweetText(e.target.value);
        

        //SEND DATA TO PARENT COMPONENT 
        if (is_modal) parentCallback(e.target.value);
        
    }


    return (
        <Box width='100%' className='input_tweet'>
            <Box marginBottom='5'>
                <TextArea
                    value={tweetText}
                    onChange={handleTweetText }
                    placeholder="What's happening?"
                    size='large'
                    autoSize={normalInput ? true  : { minRows: 3, maxRows: 7 }}
                    
                    bordered={false}
                    maxLength='200'
                    id='textArea'
                    // disabled={disabled}
                />
            </Box>



            {allowInputMedia && <InputMedia data={tweetText} /> }


        </Box>
    )
}
const mapStateToProps = (state) => ({
    state: state
  })
export default connect(mapStateToProps) (InputTweet)
