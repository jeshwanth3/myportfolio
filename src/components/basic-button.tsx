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
      className={`flex items-center justify-center bg-transparent border-none cursor-pointer transition-all duration-300 outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default BasicButton;