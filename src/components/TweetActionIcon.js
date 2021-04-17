import { Box, Flex} from '@chakra-ui/layout'

import { Tooltip } from '@chakra-ui/tooltip'
import React from 'react'
import './TweetActionIcon.css'

function TweetActionIcon({icon, number, styleBox, styleText, tooltip }) {
  
    return (
        <Box className={`${styleText}` } color='#43474b'>
            <Tooltip label={tooltip} fontSize='xs'>
                <Flex alignItems='center'>
                    <Box className={`tweet_action_hover_color ${styleBox}`}>
                        {icon}
                    </Box>
                    
                    <span >{number}</span>
                </Flex>
            </Tooltip>
               
            
        </Box>
    )
}

export default TweetActionIcon
