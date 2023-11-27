import React from "react";

const ShimmerLoader = () => {
  return (
    <div className="shimmer-list">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="item">
          Loading...
        </div>
      ))}
    </div>
  );
};

export default ShimmerLoader;
