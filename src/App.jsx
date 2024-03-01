import React from 'react'
import styles from './style';
import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Campaign from './pages/Campaign';
import Influencer from './pages/Influencer';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Unauth from './pages/Unauth';
import Forgotten from './pages/Forgotten';
import NewCampaign from './pages/NewCampaign';
import SearchCampaign from './pages/SearchCampaign';

const App = () => {
  return (
    <>
       <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/unauthorised" element={<Unauth />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/home/campaign" element={<Campaign />} />
          <Route path="/home/campaign/new" element={<NewCampaign />} />
          <Route path="/home/campaign/search" element={<SearchCampaign />} />
          <Route path="/home/campaign/influencer" element={<Influencer />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgotten" element={<Forgotten />} />
          
       </Routes>
    </>
 );
  
  
};

export default App
