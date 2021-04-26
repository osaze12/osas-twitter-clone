import { Flex, Heading } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import twitter_landing from './assets/twitter_landing.PNG'

function Login() {
    return (
       <Box>
           <Flex>
               <Box className='main_img'>
                   <img style={{height: '100vh'}} src={twitter_landing} alt='twitter_landing' />
               </Box>

               <Box className='main_login'>
                   <Heading>Login</Heading>
               </Box>
           </Flex>
       </Box>
    )
}

export default Login
