import { HStack, VStack, Box } from '@chakra-ui/layout'
import React from 'react'

function Footer() {
    return (
        <Box fontSize='xs' marginTop='3'>
            <VStack spacing='-0' alignItems='flex-start'>
                <HStack spacing='3'>
                    <a href='#'>Terms of Service</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Cookie Policy</a>
                </HStack>

                <HStack spacing='3'>
                    <a href='#'>Ads info</a>
                    <a href='#'>More &bull; &bull; &bull;</a>
                    <a href='#'>&#169; 2021 Twitter, Inc.</a>

                </HStack>
            </VStack>

        </Box>
    )
}

export default Footer
