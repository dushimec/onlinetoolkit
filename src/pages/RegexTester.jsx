import React, { useState } from 'react';

function RegexTester() {
  const [regex, setRegex] = useState('');
  const [text, setText] = useState('');
  const [matches, setMatches] = useState([]);

  const testRegex = () => {
    try {
      const re = new RegExp(regex, 'g');
      const results = [...text.matchAll(re)];
      setMatches(results.map((match) => match[0]));
    } catch (err) {
      setMatches(['Invalid Regular Expression']);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary dark:text-primary-light">Regex Tester</h2>
      <input
        type="text"
        className="w-full p-4 border rounded-md text-gray-800 dark:text-gray-200 dark:bg-gray-800"
        placeholder="Enter your regex..."
        value={regex}
        onChange={(e) => setRegex(e.target.value)}
      />
      <textarea
        className="w-full p-4 border rounded-md text-gray-800 dark:text-gray-200 dark:bg-gray-800 mt-4"
        rows="5"
        placeholder="Enter text to test..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="text-center mt-4">
        <button
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light"
          onClick={testRegex}
        >
          Test Regex
        </button>
      </div>
      {matches.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">Matches:</h3>
          <ul className="list-disc list-inside">
            {matches.map((match, index) => (
              <li key={index} className="text-gray-800 dark:text-gray-200">{match}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RegexTester;
