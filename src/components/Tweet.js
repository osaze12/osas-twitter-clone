import { Image } from '@chakra-ui/image'
import { Box, Text, HStack } from '@chakra-ui/layout'
import React from 'react'
import TweetActions from './TweetActions'
import './Tweet.css'
// import ReactTimeAgo from 'react-time-ago'
import HumanTime from 'react-human-time';

function Tweet({profileImg, name, username, time, tweet, withoutTweetActions,borderCurve, iconImg, class_name}) {
    return (
        <Box borderWidth='1px' padding='3' borderRadius={borderCurve && 'xl'} className={'tweet'}>
            <HStack alignItems='flex-start'>
                <Box className='tweet_profile_img'>
                    {iconImg ? 
                        <Box className={class_name}>{iconImg}</Box>
                    :
                        <Image 
                            src={profileImg}
                            borderRadius="full"
                            boxSize="50px"
                            objectFit="cover"
                            alt="prifile"
                        />
                    }
                </Box>
                

                <Box className='tweet_data' flex='1'>
                    <Box className='tweet_data_top'>
                        <HStack spacing='1'>
                            <Text  className='name'><b>{name}</b></Text>
                            <Text   fontSize="un"  className='username'>{username}</Text>
                            <Text  className='time' ><span className='dot'><b>&middot;</b></span> {<HumanTime time={time} />}</Text>
                        </HStack>
                    </Box>

                    <Box className='tweet_data_center'>
                        <Text >{tweet}</Text>
                    </Box>
                    {!withoutTweetActions &&
                    
                        <Box className='tweet_data_buttom'>
                            <TweetActions />
                        </Box>
                    }
                </Box>
            </HStack>
        </Box>
    )
}

export default Tweet
