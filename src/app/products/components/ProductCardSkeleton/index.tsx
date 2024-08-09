import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="flex h-fit flex-col p-4 rounded-lg bg-white text-black">
      <div className="w-1/6 h-4 rounded bg-gray-300 mb-1" />
      <div className="w-1/2 h-4 rounded bg-gray-300 mb-1" />
      <div className="w-1/4 h-4 rounded bg-gray-300 mb-1" />
      <div className="w-11/12 h-4 rounded bg-gray-300 mb-1" />
      <div className="w-1/6 h-4 rounded bg-gray-300 mb-1" />
      <div className="w-1/4 h-4 rounded bg-gray-300 mb-1" />
      <div className="w-1/2 h-4 rounded bg-gray-300 mb-1 self-center" />
    </div>
  );
};

export default ProductCardSkeleton;
