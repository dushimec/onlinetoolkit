import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-primary text-white p-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">OnlineToolkit.io</Link>
        <div className="space-x-2 text-sm">
          <input
            type="text"
            placeholder="Search tools..."
            className="p-1 rounded-md text-gray-800"
            onChange={(e) => console.log('Search:', e.target.value)}
          />
          <Link to="/tools/json-formatter" className="hover:underline">JSON Formatter</Link>
          <Link to="/tools/uuid-generator" className="hover:underline">UUID Generator</Link>
          <Link to="/tools/word-counter" className="hover:underline">Word Counter</Link>
          <Link to="/tools/qr-code-generator" className="hover:underline">QR Code Generator</Link>
          <Link to="/tools/password-generator" className="hover:underline">Password Generator</Link>
          <Link to="/tools/jwt-decoder" className="hover:underline">JWT Decoder</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;