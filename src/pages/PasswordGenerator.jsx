import React, { useState } from 'react';

function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(generatedPassword);
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">Password Generator</h2>
      <div className="text-center">
        <label className="block mb-2 text-lg text-gray-700">Password Length</label>
        <input
          type="number"
          className="p-2 border rounded-md text-gray-800"
          value={length}
          min="4"
          max="32"
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <button
          className="ml-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light"
          onClick={generatePassword}
        >
          Generate
        </button>
      </div>
      {password && (
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-700">Generated Password:</p>
          <p className="font-bold text-primary text-xl">{password}</p>
        </div>
      )}
    </div>
  );
}

export default PasswordGenerator;
