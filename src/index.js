import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import { ThemeProvider } from "styled-components";
import theme from "./theme/standard-theme";
import GlobalStyle from "./theme/global-style";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

const AppProvider = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <App />
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
);

const wrapper = document.getElementById("root");
wrapper
  ? ReactDOM.render(
      <Provider store={store}>
        <AppProvider />
      </Provider>,
      wrapper
    )
  : false;
