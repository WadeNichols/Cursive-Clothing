import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./AppContext";
import App from "./App";
import "./assets/styles.css"
import './assets/menStyles.css'


ReactDOM.render(
    <AppContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AppContextProvider>,
    document.getElementById("root")
);