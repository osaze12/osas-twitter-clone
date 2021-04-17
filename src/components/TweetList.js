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
            return console.log('b')
        }
        let sortedTweets = parse.sort((a, b) => b.id - a.id);
        setDataTweets(sortedTweets);
        return console.log('a')
    }, [tweets])


    const userTweets =  dataTweets  && dataTweets.map((data)=>{
            return <Tweet 
                        key={data.id}
                        profileImg={profileImg} 
                        name='Front-End Dav' 
                        username='@OsazeAgbi' 
                        tweet={data.text}
                        
                        comment={data.comment} 
                        likes={data.like} 
                        share={data.share}
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
