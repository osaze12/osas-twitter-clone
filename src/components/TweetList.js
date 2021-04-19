import { Box } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import Tweet from './Tweet'
import profileImg from './assets/profile.jpeg'
import { connect } from 'react-redux';

function TweetList({tweets}) {
    const [dataTweets, setDataTweets] = useState([]);
 

    

    useEffect( () => {
        const rawString = localStorage.getItem('tweetData');
        const parse = JSON.parse(rawString);
        // IF IT DOESNT GET IT FROM THE LOCAL STORAGE, IT'LL SURLY GET IT FROM THE GLOBAL STATE
        if (!parse){
            let sortedTweets = tweets.sort((a, b) => b.id - a.id);
            setDataTweets(sortedTweets);
            return console.log('route a worked')
        }
        let sortedTweets = parse.sort((a, b) => b.id - a.id);
        setDataTweets(sortedTweets);
        return console.log('route b worked')
    }, [tweets])


    const userTweets =  dataTweets  && dataTweets.map((data)=>{
            return <Tweet 
                        key={data.id}
                        id={data.id}
                        profileImg={profileImg} 
                        name='Osas' 
                        username='@OsazeAgbi' 
                        tweet={data.text}
                        
                        comment={data.comment} 
                        like={data.like} 
                        retweet={data.retweet}
                        time={data.createdAt.props.time} 
                    />
    });

    return (
        <Box>
            {userTweets ? userTweets : "There's an Error displaying posts"}         
        </Box>
    )
}
const mapStateToProps = (state) => ({
    tweets: state.liveTweet
  })
export default connect(mapStateToProps) (TweetList)
