import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">Word Counter</h2>
      <textarea
        className="w-full p-4 border rounded-md text-gray-800"
        rows="10"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <p className="text-center mt-4 text-lg text-gray-700">
        Word Count: <span className="font-bold text-primary">{wordCount}</span>
      </p>
    </div>
  );
}

export default WordCounter;