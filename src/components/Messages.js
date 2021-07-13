import { Box, Divider } from '@chakra-ui/layout'
import React from 'react'
import { connect } from 'react-redux'
import Message from './Message'

function Messages({state}) {
    return (
        <Box overflow= 'auto' height= {state.showMessageBox ? '500px' : '10px' }>
            <Message name={state.username} username={`@${state.username}`} msg='Hello, how are you doing' date='Apr 23' />
            <Divider />
            <Message name={state.username} username={`@${state.username}`} msg='guy, wassup nau!' date='Feb 23' />
            <Divider />
            <Message name={state.username} username={`@${state.username}`} msg='Are you coming to the party tonight?' date='Feb 3' />
            <Divider />
            <Message name={state.username} username={`@${state.username}`} msg='did she give you the things i sent' date='Feb 13' />
            <Divider />
            <Message name={state.username} username={`@${state.username}`} msg='Sent you a prsent, did you get it?' date='May 30' />
            <Divider />
            <Message name={state.username} username={`@${state.username}`} msg='my birthday is next week, are you ...' date='Dec 17' />
            <Divider />
            <Message name={state.username} username={`@${state.username}`} msg='free me guy' date='Feb 23' />
            <Divider />
            <Message name={state.username} username={`@${state.username}`} msg="even if, i don't care!!!!!" date='Feb 23' />
        </Box>
    )
}
const mapStateToProps = (state) => ({
    state: state
  })
export default connect(mapStateToProps) (Messages)
