import React from 'react'
import { Box, Tooltip } from "@chakra-ui/react"
import './UserProfile.css'
import { connect } from 'react-redux'
import Picture from '../Picture'
function UserProfile({tooltip, hoverColor, paddingright, box_size, state}) {
    return (
        <Box paddingRight={paddingright && '5'} className={`${hoverColor && 'hoverBgColor'}`}>
            <Tooltip label={tooltip} fontSize='smaller'>
                {/* <Image
                    borderRadius="full"
                    boxSize={box_size || '40px'}
                    src={ProfilePix}
                    objectFit="cover"
                    alt="Osaze" 
                /> */}
               <Picture/>
            </Tooltip>
            
        </Box>
    )
}
const mapStateToProps = (state) => ({
    state: state
})
export default  connect(mapStateToProps) (UserProfile)
