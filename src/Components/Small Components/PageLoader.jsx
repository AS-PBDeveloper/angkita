import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const PageLoader = ({ isVisible = true, message = "Loading..." }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col items-center justify-center">
      <LoadingSpinner />
      {message && (
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm font-medium tracking-wide">
          {message}
        </p>
      )}
    </div>
  );
};

export default PageLoader;