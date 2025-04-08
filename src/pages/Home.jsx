import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [tools, setTools] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const toolsPerPage = 5;

  useEffect(() => {
    // Fetch tools and analytics data
    axios.get('/api/tools').then((response) => setTools(response.data));
    axios.post('/api/analytics', { page: 'Home' });
  }, []);

  const paginatedTools = tools.slice(
    (currentPage - 1) * toolsPerPage,
    currentPage * toolsPerPage
  );

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold text-center mb-6 text-primary">Welcome to OnlineToolkit.io</h2>
      <p className="text-center text-lg text-gray-700">
        OnlineToolkit.io is a comprehensive suite of online developer tools designed to streamline everyday tasks for developers. From JSON formatters and UUID generators to QR code creation and file conversions (PNG to PDF, PDF to PNG), this platform offers all-in-one solutions to optimize workflows. Built using React and Tailwind CSS, the toolkit is available in both dark and light modes for a better user experience. Powered by Node.js with microservices architecture, it offers high scalability, fast performance, and integration with advanced features like search filtering, pagination, and real-time analytics. Optimized for SEO, OnlineToolkit.io offers free, reliable, and easy-to-use utilities for all your development needs, including tools for JWT decoding, password generation, and more. Start using OnlineToolkit.io today to boost your productivity!
      </p>
      <ul className="mt-6">
        {paginatedTools.map((tool, index) => (
          <li key={index} className="text-center text-lg text-gray-800">
            {tool.name}
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 bg-primary text-white rounded-md"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <button
          className="ml-4 px-4 py-2 bg-primary text-white rounded-md"
          disabled={currentPage === Math.ceil(tools.length / toolsPerPage)}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;