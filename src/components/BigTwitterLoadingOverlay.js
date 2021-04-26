import { Box } from '@chakra-ui/layout'
import React from 'react'
import {TwitterOutlined} from '@ant-design/icons';


function BigTwitterLoadingOverlay() {
    return (
        <Box minH='100vh' display='flex' justifyContent='center' alignItems='center'>
            <p>{<TwitterOutlined style={{color:'#1da1f2', fontSize: '65px'}} /> }</p>
        </Box>
    )
}

export default BigTwitterLoadingOverlay
