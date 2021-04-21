const getStringData = localStorage.getItem('tweetData');
const getJData = JSON.parse(getStringData);

const initialState = {
    showModal: false,
    isMobile: false,
    disableButton: true,
    showMessageBox: false,
    moreSection: false,
    tweetText: '',
    liveTweet: getStringData ? getJData : [
        { comment :0, id:0, like :25, retweet :10, share :0, text :"whether the whether is fine, hot cold or warm, we'll weather the weather, whatever the weather, and whether we like it.",
            "createdAt":{"key":null,"ref":null,"props":{"time":1618657357154},"_owner":null,"_store":{}}}
        ,
        { comment :0, id:1, like :8, retweet :22, share :0, text :"Example of creating a search box by grouping a standard input with a search button.",
            "createdAt":{"key":null,"ref":null,"props":{"time":1618657357154},"_owner":null,"_store":{}}}
        ,
        { comment :0, id:2, like :3, retweet :18, share :0, text :"whether the whether is fine, hot cold or warm, we'll weather the weather, whatever the weather, and whether we like it.",
            "createdAt":{"key":null,"ref":null,"props":{"time":1618657357154},"_owner":null,"_store":{}}}
        ,
        { comment :0, id:3, like :0, retweet :20, share :0, text :"A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.",
            "createdAt":{"key":null,"ref":null,"props":{"time":1618657357154},"_owner":null,"_store":{}}}
    ],
  };

  function rootReducer(state = initialState, action) {
    //   console.log(state.liveTweet)
    switch (action.type) {
        case "MODAL":
        return {
            ...state,
            showModal: action.payload,
        }

        case "DISABLEBUTTON":
        return {
            ...state,
            disableButton: action.payload,
        }

        case "MESSAGEBOX":
        return {
            ...state,
            showMessageBox: action.payload,
        }

        case "MORE_SECTION":
            return {
                ...state,
                moreSection: action.payload,
            }
        
        case "LIVE_TWEET":
            return {
                ...state,
                liveTweet: [...state.liveTweet,  action.payload]
            }

        
        case "TWEET_TEXT":
            return {
                ...state,
                tweetText: action.payload
            }
        
        case "EMPTY_TWEET_TEXT":
            return {
                ...state,
                tweetText: ''
            }
        
        case "IS_MOBILE":
            return {
                ...state,
                isMobile: action.payload
            }
        
        case 'LIKE_COUNT':
            let singleTweetLike = state.liveTweet.find((stateId)=>{
                return stateId.id === action.payload
            });
            return {
                ...state, 
                liveTweet: state.liveTweet.map(tweet => tweet.id === action.payload
                    ? {...tweet, like: singleTweetLike.like +1} : tweet)
            }

        case 'RETWEET_COUNT':
            let singleTweetRetweet = state.liveTweet.find((stateId)=>{
                return stateId.id === action.payload
            });
            return {
                ...state, 
                liveTweet: state.liveTweet.map(tweet => tweet.id === action.payload
                    ? {...tweet, retweet: singleTweetRetweet.retweet +1} : tweet)
            }

        
        default:
          return state;
      }
  };

  export default rootReducer;