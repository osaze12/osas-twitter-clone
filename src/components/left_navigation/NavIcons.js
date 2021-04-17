import { Box, HStack, Text } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import React from 'react'
import {connect} from 'react-redux'
import './NavIcons.css'

function NavIcons({icon, hoverColor, tooltip, fontSiz, w, h, text}) {
    const styles = {
        fontSize: fontSiz,
        color: hoverColor === false ? 'black' : 'none',
        width: w,
        height: h,
    }
    return (
        <Box className='nav_icon' color='#43474b'>
            
            {text ?
                <a href="#"
                style={styles} >
                        <HStack>
                        <span>{icon}</span>
                       <Text fontSize='xs' color='twitter.500' fontWeight='bold'>{text}</Text>

                        </HStack>
                    
            </a>
            :
            <a className='' href="#"
                style={styles} >
                    <Tooltip label={tooltip} fontSize='xs'>
                        <HStack>
                        <span>{icon}</span>
                    

                        </HStack>
                        
                    </Tooltip>
                    
            </a>
            }
            
        </Box>
    )
}
// const mapStateToProps = (state) => ({
//     state: state
//   })
export default connect() (NavIcons)
