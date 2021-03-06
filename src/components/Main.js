
import { Box, Flex} from '@chakra-ui/layout';
import React from 'react';
import './Main.css';
import SideNav from './left_navigation/SideNav'
import TopHome from './TopHome'
import RightSection from './right_section/RightSection'
import TweetInputArea from './TweetInputArea';
import TweetList from './TweetList';
import TweetModal from './TweetModal';
import MessagesSection from './MessagesSection';
import MoreSection from './MoreSection';
import FloatingTweetButton from './FloatingTweetButton';
import MobileNav from './MobileNav';
import Login from './Login';
import { connect } from 'react-redux';

function Main({state}) { 
   const loginSuccessful  = state.loginSuccessful;
    return (
        <>
        {!loginSuccessful ? <Login />
        :
       
        <Box minH='full' marginTop='1'>
            <Box className='overlay'></Box>


            <Flex>
                <Box className='left_side'
                    marginLeft='24' 
                    paddingRight='5' 
                    position='relative' 
                    width='100px'>
                    <SideNav />
                </Box>
                
                <Box className='main_home' flex='1.2'>
                    <TopHome />
                    <TweetInputArea />
                    <TweetList />
                </Box>
                
                <Box className='right_side' flex='1' position='relative' width='100px'>
                    <RightSection /> 
                </Box> 
            </Flex>

            <TweetModal />

            <Box>
                <MessagesSection />
            </Box>

            <Box>
                <MoreSection />
            </Box>
            {/* for mobile devices */}
            <Box>
                <FloatingTweetButton />
            </Box>

            <Box>
                <MobileNav />
            </Box>
        </Box>
        }
    </>
    )
}
const mapStateToProps = (state) => ({
    state: state
});
export default connect(mapStateToProps) (Main)
