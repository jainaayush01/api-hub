import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';

import Dashboard from './pages/Dashboard/Dashboard';

const App = (() => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
        </Routes>
      </Router>
      {/* <Dashboard /> */}
    </div>
  );
});

export default App;
