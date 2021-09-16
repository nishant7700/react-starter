import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./Routes";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

function App() {
  // document.addEventListener("contextmenu", (event) => event.preventDefault());
  // document.onkeydown = function (e) {
  //   if (
  //     e.ctrlKey &&
  //     (e.keyCode === 67 ||
  //       e.keyCode === 86 ||
  //       e.keyCode === 85 ||
  //       e.keyCode === 117)
  //   ) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };
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
