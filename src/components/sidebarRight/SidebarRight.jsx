import React from "react";

const SidebarRight = () => {
  return (
    <div className="bg-black text-white p-4 max-w-xs">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Friend Activity</h2>
        <button className="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <p className="text-sm mb-4">
        Let friends and followers on Spotify see what you're listening to.
      </p>

      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          className="flex items-center mb-3"
        >
          <div className="w-8 h-8 bg-gray-700 rounded-full mr-3"></div>
          <div className="flex-grow">
            <div className="h-2 bg-gray-700 rounded w-3/4 mb-1"></div>
            <div className="h-2 bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
      ))}

      <p className="text-xs text-gray-400 mt-4 mb-4">
        Go to Settings &gt; Social and enable "Share my listening activity on
        Spotify." You can turn this off at any time.
      </p>

      <button className="w-full bg-white text-black py-2 rounded-full font-semibold">
        SETTINGS
      </button>
    </div>
  );
};

export default SidebarRight;
