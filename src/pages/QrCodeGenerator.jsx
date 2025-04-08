import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QrCodeGenerator() {
  const [text, setText] = useState('');

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">QR Code Generator</h2>
      <input
        type="text"
        className="w-full p-4 border rounded-md text-gray-800"
        placeholder="Enter text or URL..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex justify-center mt-6">
        {text && <QRCode value={text} size={256} />}
      </div>
    </div>
  );
}

export default QrCodeGenerator;