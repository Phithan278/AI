import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import CreatorProfile from './pages/CreatorProfile';
import Marketplace from './pages/Marketplace';
import Community from './pages/Community';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingBoltBadge from './components/FloatingBoltBadge';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/creator/:id" element={<CreatorProfile />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </motion.main>
        <Footer />
        <FloatingBoltBadge />
      </div>
    </Router>
  );
}

export default App;