import React from 'react';
// import classNames from 'classnames';

export default function Button({ children, elevated }) {
  const inline = {
    transition: 'all 0.3s',
  };

  if (elevated) {
    inline.boxShadow = '0px 5px 20px rgba(102, 187, 106, 0.3)';
  }

  return (
    <button
      className="bg-green border-0 rounded text-white text-lg px-8 py-3 focus:outline-none hover:bg-green-light focus:bg-green-dark"
      style={inline}
    >
      {children}
    </button>
  );
}
