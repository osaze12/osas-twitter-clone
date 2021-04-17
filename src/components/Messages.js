import { Box, Divider } from '@chakra-ui/layout'
import React from 'react'
import { connect } from 'react-redux'
import Message from './Message'

function Messages({showMessageBox}) {
    return (
        <Box overflow= 'auto' height= {showMessageBox ? '500px' : '10px' }>
            <Message name='Tobi' username='@tobila' msg='Hello, how are you doing' date='Feb 23' />
            <Divider />
            <Message name='Tobi' username='@tobila' msg='Hello, how are you doing' date='Feb 23' />
            <Divider />
            <Message name='Tobi' username='@tobila' msg='Hello, how are you doing' date='Feb 23' />
            <Divider />
            <Message name='Tobi' username='@tobila' msg='Hello, how are you doing' date='Feb 23' />
            <Divider />
            <Message name='Tobi' username='@tobila' msg='Hello, how are you doing' date='Feb 23' />
            <Divider />
            <Message name='Tobi' username='@tobila' msg='Hello, how are you doing' date='Feb 23' />
            <Divider />
            <Message name='Tobi' username='@tobila' msg='Hello, how are you doing' date='Feb 23' />
            <Divider />
            <Message name='Tobi' username='@tobila' msg='Hello, how are you doing' date='Feb 23' />
        </Box>
    )
}
const mapStateToProps = (state) => ({
    showMessageBox: state.showMessageBox
  })
export default connect(mapStateToProps) (Messages)
