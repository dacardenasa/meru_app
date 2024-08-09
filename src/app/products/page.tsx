import { PlusCircleIcon } from "@heroicons/react/24/outline";

import { Container, CustomLink } from "@/components";

import { ProductModel } from "./models";
import { ProductCard } from "./components";
import { getProducts } from "./lib/actions";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products"
};

export default async function Products() {
  const products: ProductModel[] = await getProducts();
  return (
    <Container>
      <p className="text-white font-bold text-4xl mb-4">Registered Products</p>
      <CustomLink
        route="/products/create"
        title=" Add product"
        icon={<PlusCircleIcon className="size-8 text-white ml-2" />}
        className="text-xl mb-4"
      />
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
    </Container>
  );
}
