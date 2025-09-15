import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import PageLoader from './PageLoader';

const LoaderDemo = () => {
  const [showPageLoader, setShowPageLoader] = useState(false);

  const simulateLoading = () => {
    setShowPageLoader(true);
    setTimeout(() => {
      setShowPageLoader(false);
    }, 3000); // Hide after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <PageLoader isVisible={showPageLoader} message="Please wait..." />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Slimy Tiger Loader Demo
        </h1>
        
        <div className="space-y-8">
          {/* Inline Loader Demo */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Inline Loader
            </h2>
            <div className="flex items-center justify-center py-8">
              <LoadingSpinner />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              This is the inline version of the loader that can be used anywhere in your components.
            </p>
          </div>

          {/* Page Loader Demo */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Full-Page Loader
            </h2>
            <button
              onClick={simulateLoading}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md transition-colors"
            >
              Show Full-Page Loader
            </button>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
              Click the button above to see the full-page loader in action.
            </p>
          </div>

          {/* Usage Instructions */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              How to Use
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Inline Loader:</h3>
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                  {`<LoadingSpinner />`}
                </code>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Full-Page Loader:</h3>
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                  {`<PageLoader isVisible={loading} message="Loading..." />`}
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoaderDemo;