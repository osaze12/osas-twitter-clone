const getStringData = localStorage.getItem('tweetData');
const getJData = JSON.parse(getStringData);

const initialState = {
    showModal: false,
    disableButton: true,
    showMessageBox: false,
    moreSection: false,
    tweetText: '',
    liveTweet: getStringData ? getJData : [
        {"comment":0,"id":1,"like":0,"retweet":0,"share":0,"text":"i'm happy ve",
            "createdAt":{"key":null,"ref":null,"props":{"time":1618657357154},"_owner":null,"_store":{}}}
        ,
        {"comment":0,"id":2,"like":0,"retweet":0,"share":0,"text":"Example of creating a search box by grouping a standard input with a search button.",
            "createdAt":{"key":null,"ref":null,"props":{"time":1618657357154},"_owner":null,"_store":{}}}
        ,
        {"comment":0,"id":3,"like":0,"retweet":0,"share":0,"text":"You can use the Input in conjunction with Tooltip component to create a Numeric Input",
            "createdAt":{"key":null,"ref":null,"props":{"time":1618657357154},"_owner":null,"_store":{}}}
        ,
        {"comment":0,"id":4,"like":0,"retweet":0,"share":0,"text":"A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.",
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

        
        default:
          return state;
      }
  };

  export default rootReducer;