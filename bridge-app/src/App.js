import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Games from './pages/Games';
import Opportunities from './pages/Opportunities';
import Mentors from './pages/Mentors';
import Badges from './pages/Badges';
import AIPro from './pages/AIPro';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/badges" element={<Badges />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<ProfileEdit />} />
            <Route path="/games" element={<Games />} />
            <Route path="/aipro" element={<AIPro />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;