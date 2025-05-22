import React, { useEffect } from 'react';
import { Utensils } from 'lucide-react';

const Loader = () => {
  useEffect(() => {
    // Define the keyframes CSS
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .loader-spin {
        animation: spin 1s linear infinite;
      }
    `;
    document.head.appendChild(styleSheet);

    // Clean up the style tag when the component unmounts
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []); // Empty dependency array ensures this runs only once on mount/unmount

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center">
        {/* Apply the loader-spin class and brand colors */}
        <Utensils
          className="w-16 h-16 loader-spin" // Applied the spinning animation class
          style={{ color: '#CB6843' }} // Terracotta color
        />
        {/* Updated text color to rich brown */}
        <p className="mt-4 text-xl font-medium" style={{ color: '#593D2B' }}>
          Loading delicious content...
        </p>
      </div>
    </div>
  );
};

export default Loader;