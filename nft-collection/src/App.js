import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar.js';
import HomePage from './pages/HomePage';
import UnderWork from './pages/UnderWork';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/explore" element={<UnderWork />} />
            <Route path="/gift" element={<UnderWork />} />
            <Route path="/stats" element={<UnderWork />} />
            <Route path="/bookmarks" element={<UnderWork />} />
            <Route path="/settings" element={<UnderWork />} />
            <Route path="/notifications" element={<UnderWork />} />
            <Route path="/profile" element={<UnderWork />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
