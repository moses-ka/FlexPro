import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Nutrition from './component/nutrition';
import Fitness from './component/fitness';
import LoginSignup from './component/loginSignup';
import Profile from './component/profile';
import Account from './component/account';
import LandingPage from './component/landingPage';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
    <Router>

      <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path="/home" element={<App />}/>
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
    
    </QueryClientProvider>

);
