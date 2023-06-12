import React, { useReducer } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SimpleUsingUseReducer from "./pages/SimpleUsingUseReducer";
import UsingReduxStyle from "./pages/UsingReduxStyle";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={SimpleUsingUseReducer} />
        <Route path="/redux-style" Component={UsingReduxStyle} />
        <Route path="/user-info" Component={UserInfo} />
      </Routes>
    </Router>
  );
}

export default App;
