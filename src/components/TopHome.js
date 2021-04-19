import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout'
import React from 'react'
import {StarOutlined} from '@ant-design/icons';
import './TopHome.css'
import NavIcons from './left_navigation/NavIcons';

function TopHome() {
    return (
        <Box className='top_home' borderWidth='1px' borderTop='none' padding="0 4px">
            <Flex>
                <Heading fontSize='x-large' className='head'>Home</Heading>

                <Spacer />

                <Box>
                    <NavIcons 
                        icon={<StarOutlined 
                        style={{ color:'rgba(29,161,242,1.00)'}} />} 
                        tooltip='Top tweets' 
                        fontSiz='20px'
                        w='40px' h='40px' />
                </Box>
            </Flex>
        </Box>
    )
}

export default TopHome
