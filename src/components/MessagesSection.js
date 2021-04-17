import { Box, Divider, Flex, Heading, HStack, Spacer } from '@chakra-ui/layout'
import {DoubleRightOutlined, MailOutlined} from '@ant-design/icons';
import React from 'react'
import NavIcons from './left_navigation/NavIcons'
import './MessageSection.css'
import Messages from './Messages';
import { connect } from 'react-redux';

function MessagesSection({dispatch, showMessageBox}) {
    return (
        <Box className='message_section' width='400px' zIndex='9' position='fixed' bottom='-3' right='5'   bg='white'borderRadius='xl'>
            <Flex justifyContent='space-between' padding='2'>
                <Heading fontSize='x-large'>Messages</Heading>
                <Spacer />
                <HStack>
                 <NavIcons icon={<MailOutlined style={{color: 'rgba(29,161,242,1.00)'}} />} tooltip='New messages' fontSiz='20px' w='40px' h='40px'/>
                 <NavIcons icon={<DoubleRightOutlined
                    onClick={() => dispatch({type: 'MESSAGEBOX', payload: !showMessageBox})} 
                    style={{color: 'rgba(29,161,242,1.00)', outline:'none'}} 
                    rotate={showMessageBox ? 90 : 270} />}
                    tooltip='Collapse' 
                    fontSiz='20px' w='40px' h='40px'/>
                </HStack>
            </Flex>
            <Divider />

            <Messages />
            
            
        </Box>
    )
}
const mapStateToProps = (state) => ({
    showMessageBox: state.showMessageBox
  })
export default connect(mapStateToProps) (MessagesSection)
