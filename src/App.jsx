import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import JsonFormatter from './pages/JsonFormatter';
import UuidGenerator from './pages/UuidGenerator';
import WordCounter from './pages/WordCounter';
import QrCodeGenerator from './pages/QrCodeGenerator';
import PasswordGenerator from './pages/PasswordGenerator';
import JwtDecoder from './pages/JwtDecoder';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools/json-formatter" element={<JsonFormatter />} />
          <Route path="/tools/uuid-generator" element={<UuidGenerator />} />
          <Route path="/tools/word-counter" element={<WordCounter />} />
          <Route path="/tools/qr-code-generator" element={<QrCodeGenerator />} />
          <Route path="/tools/password-generator" element={<PasswordGenerator />} />
          <Route path="/tools/jwt-decoder" element={<JwtDecoder />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
