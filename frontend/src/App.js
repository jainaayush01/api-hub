import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';

import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';

const App = (() => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </Router>
      {/* <Dashboard /> */}
    </div>
  );
});

export default App;
