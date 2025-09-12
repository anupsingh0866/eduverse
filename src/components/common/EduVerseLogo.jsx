import React from 'react';

const EduVerseLogo = ({ size = 'default', className = '' }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'text-lg font-bold';
      case 'medium':
        return 'text-2xl font-bold';
      case 'large':
        return 'text-4xl font-bold';
      case 'xl':
        return 'text-5xl font-bold';
      default:
        return 'text-3xl font-bold';
    }
  };

  return (
    <div className={`${getSizeClasses()} ${className}`}>
      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Edu
      </span>
      <span className="text-white">
        Verse
      </span>
    </div>
  );
};

export default EduVerseLogo;
