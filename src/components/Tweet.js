
import { Box, Text, HStack } from '@chakra-ui/layout'
import React, { useState } from 'react'
import TweetActions from './TweetActions'
import './Tweet.css'
import HumanTime from 'react-human-time';
import { Flex } from '@chakra-ui/layout'
import NavIcons from './left_navigation/NavIcons'
import {EllipsisOutlined,
    FrownOutlined, 
    UserAddOutlined, 
    AppstoreAddOutlined, 
    AudioMutedOutlined, 
    StopOutlined, 
    CodeOutlined, 
    FlagOutlined,   RetweetOutlined} from '@ant-design/icons';
import LittleSmallInfoBox from './LittleSmallInfoBox'
import MoreSectionList from './MoreSectionList'
import { connect } from 'react-redux';
import parse from 'html-react-parser';
import Picture from './Picture'

function Tweet({ retweeterName, state, id, 
        name, username, 
        time, like, retweet, 
        tweet, withoutTweetActions,
        borderCurve, iconImg, 
        class_name}) {



    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const [showTweetSett, setShowTweetSett] = useState(false);



    const handleMoreOption = () => {
        setShowMoreInfo(true)
    }



    const handleMoreOptionLeave = () => {
        setShowMoreInfo(false);
    }



    const handleTweetSett = () => {
        setShowTweetSett(!showTweetSett)
    }



    const handleTweetSettLeave = () => {
        setShowTweetSett(false)
    }


    //CHANGE EVERY \N \R (SPACE) TO HTML <BR /> .
    const cleanedTweet = tweet.replace(/\r\n|\r|\n/g, "<br />");



    return (
        <Box borderWidth='1px' padding='3' 
            borderRadius={borderCurve && 'xl'} 
            className={'tweet'}>


            {retweeterName &&
             <p style={{ fontSize: '.7em', display: 'flex', fontWeight: 'bold', color: '#95a6b1'}}>
                 <span>{<RetweetOutlined  style={{marginRight: '4px', fontWeight: 'bolder', display: 'flex'}}/> }</span>
                 <span>{retweeterName} just retweeted</span>
             </p>
            }

            

            <HStack alignItems='flex-start'>
                <Box className='tweet_profile_img'>
                    {iconImg ? 
                        <Box className={class_name}>{iconImg}</Box>
                    :
                        <Box className='profile_tweet_img' position='relative' 
                            onMouseOver={handleMoreOption}  
                            onMouseLeave={handleMoreOptionLeave}>


                            <Picture/>

                            {showMoreInfo && <LittleSmallInfoBox userInfo={{name, username, time, like, retweet}} /> }
                        </Box>
                    }
                </Box>
                
                <Box className='tweet_data' flex='1'>
                    <Box className='tweet_data_top'>
                        <Flex justifyContent='space-between'>


                            <HStack spacing='1'>
                                <Text  className='name'><b>{name}</b></Text>
                                <Text fontSize='sm'  color='#6e767d'  className='username'>{username}</Text>
                                <Text fontSize='sm'  color='#6e767d' className='time' ><span className='dot'><b>&middot;</b></span> {<HumanTime time={time}  />}</Text>
                            </HStack>


                           <Box className='more_tweet_option' onClick={handleTweetSett} onMouseLeave={handleTweetSettLeave} position='relative'>
                               <NavIcons 
                                    icon={<EllipsisOutlined />} 
                                    tooltip='More' 
                                    fontSiz='25px' 
                                    w='40px' h='40px'
                                />



                                {showTweetSett &&
                                    <Box className='tweet_settings'>
                                        <MoreSectionList icon={<FrownOutlined style={{color:'rgb(91, 112, 131)'}}/>} text='Not interested in this tweet' />
                                        <MoreSectionList icon={<UserAddOutlined style={{color:'rgb(91, 112, 131)'}}/>} text='Unfollow @OsazeAgbi' />
                                        <MoreSectionList icon={<AppstoreAddOutlined style={{color:'rgb(91, 112, 131)'}}/>} text='Add/remove @OsazeAgbi from list' />
                                        <MoreSectionList icon={<AudioMutedOutlined style={{color:'rgb(91, 112, 131)'}}/>} text='Mute @OsazeAgbi' />
                                        <MoreSectionList icon={<StopOutlined style={{color:'rgb(91, 112, 131)'}}/>} text='Block @OsazeAgbi' />
                                        <MoreSectionList icon={<CodeOutlined style={{color:'rgb(91, 112, 131)'}}/>} text='Embed tweet' />
                                        <MoreSectionList icon={<FlagOutlined style={{color:'rgb(91, 112, 131)'}}/>} text='Report tweet' />
                                    </Box>
                                }
                           </Box>
                        </Flex>
                    </Box>



                    <Box className='tweet_data_center'>
                        <Text maxW='475px' fontSize='md' fontWeight='medium' lineHeight='shorter' >{parse(`<p> ${cleanedTweet} </p>`)}</Text>
                    </Box>



                    {/* //IF YOU DONT WANT TWEET ACTIONS COMPONENT, IT SHOULD NOT SHOW */}
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
const mapStateToProps = (state) => ({
    state:state
})
export default connect(mapStateToProps) (Tweet)
