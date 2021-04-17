import React from 'react'
import ProfilePix from '../assets/profile.jpeg'
import { Box, Image, Tooltip } from "@chakra-ui/react"
import './UserProfile.css'
function UserProfile({tooltip, hoverColor, paddingright, box_size}) {
    return (
        <Box paddingRight={paddingright && '5'} className={`${hoverColor && 'hoverBgColor'}`}>
            <Tooltip label={tooltip} fontSize='smaller'>
                <Image
                    borderRadius="full"
                    boxSize={box_size || '40px'}
                    src={ProfilePix}
                    objectFit="cover"
                    alt="Osaze" 
                />
            </Tooltip>
            
        </Box>
    )
}

export default UserProfile
