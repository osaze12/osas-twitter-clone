import React from 'react'
import NavIcons from './left_navigation/NavIcons'
import {PictureOutlined, GifOutlined, ProjectOutlined, SmileOutlined, CalendarOutlined} from '@ant-design/icons';
import { Box, Flex, HStack, Spacer } from '@chakra-ui/layout';
import TweetButton from './TweetButton';
import './InputMedia.css'
import { connect } from 'react-redux';

function InputMedia({tweet_is_in_modal, is_mobile, data}) {
    return (
        <Box width='100%' className='input_media'>
            <Flex>

                
                <HStack spacing='1'>
                    <NavIcons icon={<PictureOutlined style={{color: 'rgba(29,161,242,1.00)'}} />} tooltip='Media' fontSiz='20px' w='40px' h='40px' />
                    <NavIcons icon={<GifOutlined style={{color: 'rgba(29,161,242,1.00)'}} />} tooltip='Gif' fontSiz='20px' w='40px' h='40px'/> 
                    {! is_mobile && <NavIcons icon={<ProjectOutlined rotate={270} style={{color: 'rgba(29,161,242,1.00)'}} />} tooltip='Poll' fontSiz='20px' w='40px' h='40px' />}
                    <NavIcons icon={<SmileOutlined  style={{color: 'rgba(29,161,242,1.00)'}} />} tooltip='Emoji' fontSiz='20px' w='40px' h='40px' />
                    {! is_mobile && <NavIcons icon={<CalendarOutlined  style={{color: 'rgba(29,161,242,1.00)'}} />} tooltip='Schedule' fontSiz='20px' w='40px' h='40px' />}
                </HStack>
                


                <Spacer />



                <TweetButton tweet_is_in_modal={tweet_is_in_modal && true} dataTweet={data} />
            </Flex>

            
            
        </Box>
    )
}
const mapStateToProps = (state) => ({
    is_mobile: state.isMobile
})
export default connect(mapStateToProps) (InputMedia)
