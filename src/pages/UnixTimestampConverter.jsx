import React, { useState } from 'react';

function UnixTimestampConverter() {
  const [timestamp, setTimestamp] = useState('');
  const [date, setDate] = useState('');

  const convertTimestamp = () => {
    const convertedDate = new Date(Number(timestamp) * 1000).toLocaleString();
    setDate(convertedDate);
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary dark:text-primary-light">Unix Timestamp Converter</h2>
      <input
        type="number"
        className="w-full p-4 border rounded-md text-gray-800 dark:text-gray-200 dark:bg-gray-800"
        placeholder="Enter Unix timestamp..."
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
      />
      <div className="text-center mt-4">
        <button
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light"
          onClick={convertTimestamp}
        >
          Convert
        </button>
      </div>
      {date && (
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">Converted Date:</p>
          <p className="font-bold text-primary dark:text-primary-light text-xl">{date}</p>
        </div>
      )}
    </div>
  );
}

export default UnixTimestampConverter;
