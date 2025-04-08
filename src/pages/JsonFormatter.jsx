import React, { useState } from 'react';

function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const formatJson = () => {
    try {
      const formatted = JSON.stringify(JSON.parse(input), null, 2);
      setOutput(formatted);
      setError('');
    } catch (err) {
      setError('Invalid JSON');
      setOutput('');
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary dark:text-primary-light">JSON Formatter</h2>
      <textarea
        className="w-full p-4 border rounded-md text-gray-800 dark:text-gray-200 dark:bg-gray-800"
        rows="10"
        placeholder="Paste your JSON here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div className="text-center mt-4">
        <button
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light"
          onClick={formatJson}
        >
          Format JSON
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {output && (
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4 text-sm text-gray-800 dark:text-gray-200">
          {output}
        </pre>
      )}
    </div>
  );
}

export default JsonFormatter;