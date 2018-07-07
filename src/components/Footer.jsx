import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{ marginTop: '67vh' }}
      className="bg-light text-white p-4 text-center"
    >
      <a
        href="https://github.com/brandnpatterson"
        target="_blank"
        rel="noopener noreferrer"
      >
        Copyright &copy; {new Date().getFullYear()} Brandon Patterson
      </a>
    </footer>
  );
};

export default Footer;
