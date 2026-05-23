import React from 'react';

interface GoldButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const GoldButton: React.FC<GoldButtonProps> = ({ 
  children, 
  href, 
  onClick, 
  className = '' 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 border border-[#C5A46E] text-[#C5A46E] tracking-[2px] text-sm transition-all duration-300 hover:bg-[#C5A46E] hover:text-black";

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${className}`}>
      {children}
    </button>
  );
};

export default GoldButton;