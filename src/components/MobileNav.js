import { Box, HStack } from '@chakra-ui/layout'
import React from 'react';
import {HomeFilled, SearchOutlined, BellOutlined, MailOutlined} from '@ant-design/icons';
import NavIcons from './left_navigation/NavIcons';
import './MobileNav.css'
import { Flex } from '@chakra-ui/layout';

function MobileNav() {
    return (
        <Box className='mobile_nav'>
            <Box className='mobile_nav_inner'>
                <Flex alignItems='center' justifyContent='center'>
                    <HStack spacing='8'>
                        <NavIcons icon={<HomeFilled style={{color:'#1da1f2'}} />} tooltip='Home' fontSiz='19px' />
                        <NavIcons icon={<SearchOutlined />} tooltip='Explore' fontSiz='19px' />
                        <NavIcons icon={<BellOutlined/> } tooltip='Notifications' fontSiz='19px' />
                        <NavIcons icon={<MailOutlined />} tooltip='Messages' fontSiz='19px' />
                    </HStack>
                </Flex>
            </Box>
        </Box>
    )
}

export default MobileNav
