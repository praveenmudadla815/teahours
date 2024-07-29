import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-900 h-48 w-full rounded-lg mb-4"></div>
      <div className="bg-gray-900 h-6 w-3/4 rounded-lg mb-2"></div>
      <div className="bg-gray-900 h-4 w-1/2 rounded-lg"></div>
    </div>
  );
};

export default SkeletonLoader;
