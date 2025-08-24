import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          This is a clean, blank page ready for your portfolio content. 
          Start building your amazing portfolio here!
        </p>
      </div>
    </div>
  );
};
