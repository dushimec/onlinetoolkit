import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function UuidGenerator() {
  const [uuid, setUuid] = useState('');

  const generateUuid = () => {
    setUuid(uuidv4());
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary dark:text-primary-light">UUID Generator</h2>
      <div className="text-center">
        <button
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light"
          onClick={generateUuid}
        >
          Generate UUID
        </button>
      </div>
      {uuid && (
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">Generated UUID:</p>
          <p className="font-bold text-primary dark:text-primary-light text-xl">{uuid}</p>
        </div>
      )}
    </div>
  );
}

export default UuidGenerator;