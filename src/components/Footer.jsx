import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary text-white p-4 mt-10">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} OnlineToolkit.io. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;