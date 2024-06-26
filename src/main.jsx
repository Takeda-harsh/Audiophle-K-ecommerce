import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from "./store/store.js";

import "./index.css";


const theme = extendTheme({
  fonts: {
    body: "'Manrope', sans-serif",
    heading: "'Manrope', sans-serif",
  },
 
  
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
      <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
      </Provider>
    
  
   
   
     
    
  </React.StrictMode>
);
