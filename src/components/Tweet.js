import { Image } from '@chakra-ui/image'
import { Box, Text, HStack } from '@chakra-ui/layout'
import React from 'react'
import TweetActions from './TweetActions'
import './Tweet.css'
import HumanTime from 'react-human-time';
import { Flex } from '@chakra-ui/layout'
import NavIcons from './left_navigation/NavIcons'
import {EllipsisOutlined} from '@ant-design/icons';

function Tweet({id, profileImg, name, username, time, like, retweet, tweet, withoutTweetActions,borderCurve, iconImg, class_name}) {
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
                        <Flex justifyContent='space-between'>
                            <HStack spacing='1'>
                                <Text  className='name'><b>{name}</b></Text>
                                <Text   fontSize="un"  className='username'>{username}</Text>
                                <Text  className='time' ><span className='dot'><b>&middot;</b></span> {<HumanTime time={time}  />}</Text>
                            </HStack>
                            
                            <NavIcons icon={<EllipsisOutlined />} tooltip='More' fontSiz='25px' w='40px' h='40px' />
                        </Flex>
                    </Box>

                    <Box className='tweet_data_center'>
                        <Text >{tweet}</Text>
                    </Box>
                    {!withoutTweetActions &&
                    
                        <Box className='tweet_data_buttom'>
                            <TweetActions id={id} like={like} retweet={retweet} />
                        </Box>
                    }
                </Box>
            </HStack>
        </Box>
    )
}

export default Tweet
