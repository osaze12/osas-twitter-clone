import React from 'react'
import {TwitterOutlined, HomeOutlined, HomeFilled, NumberOutlined, BellOutlined, MailOutlined, BookOutlined, ProfileOutlined, UserOutlined, EllipsisOutlined} from '@ant-design/icons';
import NavIcons from './NavIcons'
import {connect} from 'react-redux'
import './SideNav.css'
import { Box, VStack } from '@chakra-ui/layout';
import NewTweet from './NewTweet'
import UserProfile from './UserProfile'

function SideNav(props) {
    const showModal = (boo) => {
        props.dispatch({type:'MODAL', payload: boo});
    }
    

    return (
        <Box className="side_nav" position='fixed'>
            <VStack maxW='60' spacing='36'>
                <VStack spacing='-0.5'>
                    <NavIcons icon={<TwitterOutlined style={{fontSize: '35px'}} />} hoverColor={false} fontSiz='25px' />
                    <NavIcons icon={<HomeFilled style={{color:'#1da1f2'}} />} tooltip='Home' fontSiz='25px' />
                    <NavIcons icon={<NumberOutlined />} tooltip='Explore' fontSiz='25px' />
                    <NavIcons icon={<BellOutlined/> } tooltip='Notifications' fontSiz='25px' />
                    <NavIcons icon={<MailOutlined />} tooltip='Messages' fontSiz='25px' />
                    <NavIcons icon={<BookOutlined />} tooltip='Bookmarks' fontSiz='25px' />
                    <NavIcons icon={<ProfileOutlined />} tooltip='Lists' fontSiz='25px' />
                    <NavIcons icon={<UserOutlined />} tooltip='Profile' fontSiz='25px' />

                    <Box onClick={() => props.dispatch({type: 'MORE_SECTION', payload: !props.showMore}) }>
                        <NavIcons icon={<EllipsisOutlined />} tooltip='More' fontSiz='25px' />
                    </Box>
                    


                    <NewTweet tooltip='Tweet' w='50px' h='50px' onClick={() => showModal(true)} />
                </VStack>



                {/* PROFILE PICTURE */}
                <UserProfile tooltip='Accounts' hoverColor={true} />
            </VStack>
        </Box> 
    )
}
const mapStateToProps = (state) => ({
    showMore: state.moreSection
  })
export default connect(mapStateToProps) (SideNav)
