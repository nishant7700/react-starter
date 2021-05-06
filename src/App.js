import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./Routes";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

function App() {
  useEffect(() => {
    setAuthToken(localStorage.getItem("token"));
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
