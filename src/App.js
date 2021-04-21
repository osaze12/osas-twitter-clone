
import './App.css';
import React, {useEffect, useState} from 'react';
import Main from './components/Main';
import store from './store/index'
import { connect } from 'react-redux';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { Box, HStack } from '@chakra-ui/layout';
import smiley from './components/assets/smiley.png'
function App({state}) {
  //STORE USER TWEET TO LOCAL STORE FOR PERSITENCY
  const data = store.getState();
  const tweets = data.liveTweet

  const [showModal, setShowModal] = useState(true)
  const handleOnClose = () => {
    setShowModal(false);
  }

  useEffect(() => {
    if (state.liveTweet.length < 0) return ;

    localStorage.setItem('tweetData', JSON.stringify(state.liveTweet))
  }, [tweets])
  
  return (
    <div className="App">
      <Main />


      <Modal isOpen={showModal || false} onClose={handleOnClose}>
            <ModalOverlay />
            <ModalContent  borderRadius='2xl'>
                <Box>
                  <ModalHeader>Available for Gigs</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>

                  
                    <HStack alignItems='flex-start'>
                      <img src={smiley} alt="creator_img" />
                      
                      <div className="modal__text">
                          <h1>Hello, I'm a React Js front-end Developer,</h1>
                          <p>And I am available for Gigs,
                          you can reach out to me through my email, <a style={{color: 'blue'}} href="mailto:osazeagbi@gmail.com">osazeagbi@gmail.com</a>,<br/>
                          I'd love to hear from you, thank you.</p>
                      </div>
                    </HStack>
                    </ModalBody>
                </Box>
              </ModalContent>
        </Modal>
    </div>
  );
}
const mapStateToProps = (state) => ({
    state: state
  })
export default connect(mapStateToProps) (App);
