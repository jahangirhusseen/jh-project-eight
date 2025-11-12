import React from "react";

const SkeletonLoader = ({ count }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {Array.from({ length: count || 10 }).map((_, i) => (
          <div key={i} className="flex  h-70 flex-col gap-4">
            <div className="skeleton h-70 w-full"></div>
            <div className="skeleton h-8 w-1/2"></div>
            <div className="flex justify-between ">
              <div className="skeleton h-6 w-1/3"></div>
              <div className="skeleton h-6 w-1/3"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkeletonLoader;
