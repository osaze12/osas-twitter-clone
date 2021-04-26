import './App.css';
import React, {useEffect, useState} from 'react';
import Main from './components/Main';
import store from './store/index'
import { connect } from 'react-redux';
import BigTwitterLoadingOverlay from './components/BigTwitterLoadingOverlay';

function App({state}) {
  const [showLoadingLogo, setShowLoadingLogo] = useState(true)
 

//STORE USER TWEET TO LOCAL STORE FOR PERSITENCY
  const data = store.getState();
  const tweets = data.liveTweet;
  useEffect(() => {
    if (state.liveTweet.length < 0) return ;
    localStorage.setItem('tweetData', JSON.stringify(state.liveTweet))
  }, [tweets]);



//SHOW BIG OVERLAY OF TWITTER (AS LOADING)
  useEffect(() => {
    setTimeout( () => {
      setShowLoadingLogo(false)
    }, 4000);
  })
  

  
  return (
    <div className="App">
      {showLoadingLogo ? 
        <BigTwitterLoadingOverlay />
      :
        <Main />
      }
    </div>
  );
}
const mapStateToProps = (state) => ({
    state: state
  })
export default connect(mapStateToProps) (App);
