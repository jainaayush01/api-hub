import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";

import Marketplace from "./pages/Marketplace/Marketplace";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import BGRemover from "./pages/BGRemover/BGRemover";
import UserDashboard from "./pages/UserDashboard/UserDashboard";

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
