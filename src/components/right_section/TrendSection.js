import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout'
import {SettingOutlined} from '@ant-design/icons';
import React from 'react'
import './TrendSection.css'
import NavIcons from '../left_navigation/NavIcons';
import AllTrends from './AllTrends';

function TrendSection() {
    return (
        <Box marginTop='5' borderRadius='xl' className='trendsection'>
            <Box padding='2'>
                <Flex>
                    <Heading fontSize='x-large'>Trends for you</Heading>
                    <Spacer />

                    <Box >
                        <NavIcons 
                            icon={<SettingOutlined 
                            style={{ color:'rgba(29,161,242,1.00)'}} />} 
                            tooltip='Settings' 
                            fontSiz='20px'
                            w='40px' h='40px' />
                    </Box>
                </Flex>
            </Box>

            <AllTrends />
        </Box>
    )
}

export default TrendSection
