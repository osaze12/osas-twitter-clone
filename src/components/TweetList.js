import { Box } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import Tweet from './Tweet'
import { connect } from 'react-redux';

function TweetList({state}) {
    const [dataTweets, setDataTweets] = useState([]);
 

    useEffect( () => {
        const rawString = localStorage.getItem('tweetData');
        const parse = JSON.parse(rawString);

        
        // IF IT DOESNT GET IT FROM THE LOCAL STORAGE, IT'LL SURLY GET IT FROM THE GLOBAL STATE
        if (!parse){
            let sortedTweets = state.liveTweet.sort((a, b) => b.id - a.id);
            setDataTweets(sortedTweets);
            return console.log('route a worked')
        }


        let sortedTweets = parse.sort((a, b) => b.id - a.id);
        setDataTweets(sortedTweets);
        return console.log('route b worked');


    }, [state.liveTweet])


    const userTweets =  dataTweets  && dataTweets.map((data)=>{
            return <Tweet 
                        key={data.id}
                        id={data.id}
                        name={state.username} 
                        username={`@${state.username}`}
                        tweet={data.text}
                        retweeterName={state.username}
                        comment={data.comment} 
                        like={data.like} 
                        retweet={data.retweet}
                        time={data.createdAt.props.time} 
                    />
    });

    return (
        <Box>
            {userTweets ? userTweets : "There's an Error displaying Tweets"}         
        </Box>
    )
}
const mapStateToProps = (state) => ({
    state: state
  })
export default connect(mapStateToProps) (TweetList)
