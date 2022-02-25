import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import {
  Login,
  Marketplace,
  UserDashboard,
  BGRemover,
  Register,
} from "./pages";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Marketplace />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/bgremover" element={<BGRemover />} />
          <Route exact path="/myaccount" element={<UserDashboard />} />
          <Route exact path="/myapis" element={<UserDashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
