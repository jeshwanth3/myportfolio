import React from 'react';

interface BasicButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const BasicButton: React.FC<BasicButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default BasicButton;