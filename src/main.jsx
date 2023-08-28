import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Nutrition from './component/nutrition';
import Fitness from './component/fitness';
import LoginSignup from './component/loginSignup';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </Router>

);
