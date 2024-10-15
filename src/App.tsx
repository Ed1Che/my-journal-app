import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import JournalPage from './components/JournalPage';
import ReadJournalPage from './components/ReadJournalPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/read-journal" element={<ReadJournalPage />} />
      </Routes>
    </Router>
  );
};

export default App;
