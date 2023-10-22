import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <ChatProvider>
    <ChakraProvider>
      <Router>
        <ChatProvider>
          <App />
        </ChatProvider>
      </Router>
    </ChakraProvider>
  </ChatProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();