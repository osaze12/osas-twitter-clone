import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import './LittleInfoBox.css'
import Picture from './Picture'

function LittleSmallInfoBox({userInfo}) {
    return (
        <Box className='little_info_box' width='300px'>
            <Flex justifyContent='space-between' marginBottom='3' marginTop='2'>

                
                <VStack alignItems='flex-start' spacing='0.5'>
                    <Picture/>


                    <VStack spacing="-1.5" alignItems='flex-start'>
                        <Text className='d_bold'><b>{userInfo.name}</b></Text>
                        <Text fontSize='xs'>{userInfo.username}</Text>
                    </VStack>
                </VStack>
                <Button className='small_info_button' borderRadius='full'>Following</Button>
            </Flex>



            <Box>
                <Text className='bio d_bold' fontSize='sm'>
                    I've learned that people will pay for what I know, and 
                    I can learn the things I don't know. So I learn everything.
                </Text>
            </Box>
            



            <Box marginTop='3' marginBottom='6'>
                <HStack spacing='3'>
                    <Text><b className='d_bold'>3,402</b> Following</Text>
                    <Text><b className='d_bold'>3,123</b> Followers</Text>
                </HStack>
            </Box>
            
        </Box>
    )
}

export default LittleSmallInfoBox
