import { Box, Divider, HStack, VStack } from '@chakra-ui/layout'
import React, { useState } from 'react'
import {connect} from 'react-redux'

import {
    Modal,
    ModalOverlay,
    ModalContent,
  } from "@chakra-ui/react"
import { CloseOutlined, GlobalOutlined} from '@ant-design/icons';
import UserProfile from './left_navigation/UserProfile'
import InputTweet from './InputTweet'
import NavIcons from './left_navigation/NavIcons'
import InputMedia from './InputMedia'
import './TweetModal.css'

function TweetModal(props) {
    // const {onOpen, onClose } = useDisclosure();

    const [dataFromChild, setDataFromChild] = useState('');


    
    //SET DATA FROM CHILD COMPONENT TO PARENT LOCAL STATE
    const handleCallback = (childData) =>{
        setDataFromChild(childData);
    }



    const handleClose = () => {
        props.dispatch({type:'MODAL', payload: false})
        props.dispatch({type:'IS_MOBILE', payload: false})
    }

    return (
        <Box>
            <Modal isOpen={props.showModal || false} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent maxW='600px' borderRadius='2xl'>

                
                <Box outline='none' onClick={()=> props.dispatch({type:'MODAL', payload: false})}>
                    <NavIcons icon={<CloseOutlined style={{color:'#1da1f2'}} />}
                        tooltip='Close' 
                        fontSiz='20px' 
                        w='40px' h='40px'
                        /> 
                </Box>
                    
                <Divider />


                <Box padding='2.5'>
                    <HStack alignItems='flex-start' marginTop='1.5'>
                        <UserProfile paddingright={false} box_size='50px' />
                        <VStack flex='1' alignItems='flex-start'>

                            <InputTweet allowInputMedia={false} normalInput={false} is_modal={true} parentCallback = {handleCallback} />
                            
                            <NavIcons icon={<GlobalOutlined style={{color: 'rgba(29,161,242,1.00)'}} />} 
                                fontSiz='20px' w='150px' h='30px' 
                                text='Everyone can reply'
                            />


                            <Divider marginTop='4'/>



                            <InputMedia tweet_is_in_modal={true} data={dataFromChild}  />

                            
                        </VStack>
                    </HStack>
                </Box>
            </ModalContent>
            </Modal>

        </Box>
    )
}
const mapStateToProps = (state) => ({
    showModal: state.showModal
})

export default connect(mapStateToProps) (TweetModal)
