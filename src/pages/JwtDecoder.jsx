import React, { useState } from 'react';

function JwtDecoder() {
  const [jwt, setJwt] = useState('');
  const [decoded, setDecoded] = useState(null);

  const decodeJwt = () => {
    try {
      const base64Url = jwt.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
          .join('')
      );
      setDecoded(JSON.parse(jsonPayload));
    } catch (error) {
      setDecoded({ error: 'Invalid JWT' });
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">JWT Decoder</h2>
      <textarea
        className="w-full p-4 border rounded-md text-gray-800"
        rows="5"
        placeholder="Paste your JWT here..."
        value={jwt}
        onChange={(e) => setJwt(e.target.value)}
      ></textarea>
      <div className="text-center mt-4">
        <button
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light"
          onClick={decodeJwt}
        >
          Decode
        </button>
      </div>
      {decoded && (
        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-700">Decoded Payload:</h3>
          <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-800">
            {JSON.stringify(decoded, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default JwtDecoder;
