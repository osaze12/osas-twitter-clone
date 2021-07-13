import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import MoreSectionList from './MoreSectionList'
import './MoreSection.css'
import { connect } from 'react-redux'
import {MessageOutlined,SelectOutlined, ThunderboltOutlined, BarChartOutlined,SettingOutlined, QuestionCircleOutlined, ApartmentOutlined, SkinOutlined} from '@ant-design/icons';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
    Button,
    useColorMode
  } from "@chakra-ui/react"
import Tweet from './Tweet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


function MoreSection(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { colorMode, toggleColorMode } = useColorMode()
    


    return (
        <>
        {props.showMore &&

        
            <Box className='more_section'>
                
                <MoreSectionList icon={<MessageOutlined style={{color:'rgb(91, 112, 131)'}}/>} text='Topics' />
                <MoreSectionList icon={<ThunderboltOutlined style={{color:'rgb(91, 112, 131)'}} />} text='Moments' />
                <MoreSectionList icon={<SelectOutlined style={{color:'rgb(91, 112, 131)'}} />} text='Twitter Ads' />
                <MoreSectionList icon={<BarChartOutlined style={{color:'rgb(91, 112, 131)'}} />} text='Analytics' />
                <Divider />


                <MoreSectionList icon={<SettingOutlined style={{color:'rgb(91, 112, 131)'}} />} text='Settings and privacy' />
                <MoreSectionList icon={<QuestionCircleOutlined style={{color:'rgb(91, 112, 131)'}} />} text='Help Center' />


                {/* LIGHT/DARK MODE BUTTON */}
                <Box onClick={onOpen}>
                    <MoreSectionList icon={<SkinOutlined style={{color:'rgba(29,161,242,1.00)'}}/>} text='Display' />
                </Box>



                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent maxWidth='600px'>
                        <ModalBody>
                            <Heading fontSize='x-large' textAlign='center' marginBottom='3' marginTop='4'>Customise your view</Heading>


                            <Text fontSize='sm' lineHeight='short' color='gray' marginBottom='2' textAlign='center'>
                                Manage your background, and other features coming soon. These settings affect all the Twitter accounts on this browser.
                            </Text>



                            <Box padding='20px 50px 50px 50px'>
                                <Tweet 
                                    withoutTweetActions={true}
                                    borderCurve={true}
                                    // profileImg={}
                                    iconImg={<FontAwesomeIcon icon={faTwitter} c />}
                                    name='Twitter' 
                                    username='@Twitter' 
                                    tweet={`At the heart of Twitter are short messages 
                                    called tweets --- just like this one --- which can include
                                    photos, videos, links, text and #hashtags!`}
                                    class_name='twitter_style'
                                    comment={1} 
                                    likes={2} 
                                    share=''
                                    time={new Date(Date.now() - 5 * 1000)}/>
                            </Box>


                            <Box className='bkg' marginTop='5'>
                                <Heading size='sm' color='rgb(91, 112, 131)'>Background</Heading>


                                    <Box className='bkg_inner'>
                                            <Flex justifyContent='space-between'>
                                                <Box className={`toogle_theme_box_${colorMode === 'light' ? 'light' : 'dark' }`} 
                                                    onClick={toggleColorMode}>

                                                    {colorMode === "light" ? 'Default' :' Lights out' } 
                                                </Box>
                                            </Flex>
                                    </Box>
                            </Box>



                            <Box display='flex' justifyContent='center' marginTop='5'>
                                <Button  background='#1da1f2'
                                        margin='20px 0'
                                         color= '#fff'
                                        _hover={{background:'#1da1f2'}} 
                                        onClick={onClose} 
                                        borderRadius='full' textAlign='center'
                                >
                                    Done
                                </Button>
                            </Box> 
                        </ModalBody>
                    </ModalContent>
                </Modal>

                 {/* END LIGHT/DARK MODE BUTTON */}

                <MoreSectionList icon={<ApartmentOutlined style={{color:'rgb(91, 112, 131)'}} />} text='Keyboard and shortcuts' />
                
            </Box>
        }
        </>
    )
}
const mapStateToProps = (state) => ({
    showMore: state.moreSection
  })
export default connect(mapStateToProps) (MoreSection)
