import React from "react";

import { ProductModel } from "../../models";
import { getProducts } from "../../lib/actions";
import ProductCard from "../ProductCard";

const ProductsList = async () => {
  const products: ProductModel[] = await getProducts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full overflow-hidden overflow-y-auto font-mono text-sm">
      {products.map(({ id, description, name, price }) => (
        <ProductCard
          key={id}
          {...{
            description,
            id,
            name,
            price
          }}
        />
      ))}
    </div>
  );
};

export default ProductsList;
