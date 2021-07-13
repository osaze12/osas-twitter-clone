import { motion } from 'framer-motion'
import React, { useState } from 'react'
import twitter_landing from './assets/twitter_landing.PNG'
import './Login.css'
import {connect} from 'react-redux'

function Login({dispatch}) {
    const [username, setUsername] = useState("");
    const loginSectionAnimate = {
        y: 0,
        opacity: 1, 
        delay: 1, 
        transition: { delay: 1 }
    }
    const loginSectionInitial = {
        opacity: 0, 
        y: -30
    }

    const loginNotificationAnimate = {
        opacity: 1, 
        y: 0, 
        transition: {
            type: "spring", 
            stiffness: 300, 
            delay: 2.5 
        }
    }
    const login = (e) => {
        e.preventDefault();
        dispatch({type: 'LOGIN_SUCCESSFUL', payload: {isSuccessful: true, username: username}});
    }
    return (
       <div className="login-container">
           <div className="login-container__inner">
               <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: .5 }}
                className='login-container__main-img'>
                   <img src={twitter_landing} alt='twitter_landing' />
               </motion.div>

               <div className='login-container__main-login'>
                   <motion.div 
                   initial={loginSectionInitial}
                   animate={loginSectionAnimate}
                   className="login-container__main-login__inner">
                       <motion.p
                        initial={{opacity: 0, y: -10}}
                        animate={loginNotificationAnimate}
                        className="login-notification">
                            You can type in wrong data, these isn't the <b>Real Twitter App.</b>
                        </motion.p>
                        <h2>Login into Twitter</h2>
                        <form class="login-container__login-form">
                            <input 
                            type="text" 
                            name="username" 
                            onChange={(e) => setUsername(e.target.value)} 
                            value={username} 
                            placeholder='Username'/>
                            
                            <input type="password" name="password"  placeholder='Password'/>
                            <button onClick={login} class="login_btn">Login</button>
                        </form>
                   </motion.div>
               </div>
           </div>
       </div>
    )
}

export default connect() (Login)
