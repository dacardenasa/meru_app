import React from "react";
import ProductCardSkeleton from "../ProductCardSkeleton";

type ProductsLoaderProps = {
  skeletonQuantity: number;
};

const ProductsLoader = ({ skeletonQuantity }: ProductsLoaderProps) => {
  const items = new Array(skeletonQuantity).fill("_");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full overflow-hidden overflow-y-auto font-mono text-sm">
      {items.map((_) => (
        <ProductCardSkeleton key={crypto.randomUUID()} />
      ))}
    </div>
  );
};

export default React.memo(ProductsLoader);
