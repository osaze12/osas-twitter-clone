
import './App.css';
import React, {useEffect} from 'react';
import Main from './components/Main';
import store from './store/index'
import { connect } from 'react-redux';

function App({state}) {
  //STORE USER TWEET TO LOCAL STORE FOR PERSITENCY
  const data = store.getState();
  const tweets = data.liveTweet


  useEffect(() => {
    if (state.liveTweet.length < 0) return ;

    localStorage.setItem('tweetData', JSON.stringify(state.liveTweet))
  }, [tweets])
  
  return (
    <div className="App">
      <Main />
    </div>
  );
}
const mapStateToProps = (state) => ({
    state: state
  })
export default connect(mapStateToProps) (App);
