import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import Signout from "./components/auth/Signout";
import Feature from "./components/Feature";

// reducers, initialState, reduxThunk
const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") },
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/signout" component={Signout} />
        <Route path="/feature" component={Feature} />
      </App>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
