import { Box, HStack, Text } from '@chakra-ui/layout'
import React from 'react'
import './MoreSectionList.css'

function MoreSectionList({icon, text}) {
    return (
        <Box className='more_section_list'>
            <Box padding='3' alignItems='center'>
                <HStack spacing='5'>
                    <span>{icon}</span>
                    <Text fontSize='sm' fontWeight='hairline'>{text}</Text>
                </HStack>
            </Box>
        </Box>
        
    )
}

export default MoreSectionList
