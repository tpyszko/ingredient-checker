import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./container/App"
import { ThemeProvider } from 'styled-components';
import theme from "./theme/standard-theme"
import GlobalStyle from "./theme/global-style"

const AppProvider = () => (
    <ThemeProvider theme={theme}>
        <Fragment>
            <App />
            <GlobalStyle />
        </Fragment>
    </ThemeProvider>
);

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<AppProvider />, wrapper) : false;