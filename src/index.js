import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import store from './store/index'
import { ColorModeScript } from "@chakra-ui/react"
import {theme} from './components/theme'

// import TimeAgo from 'javascript-time-ago'
// import en from 'javascript-time-ago/locale/en'


// TimeAgo.addDefaultLocale(en)


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
      <ColorModeScript />
        <App />
      </Provider>
    </ChakraProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
