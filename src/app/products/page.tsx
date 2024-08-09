import { PlusCircleIcon } from "@heroicons/react/24/outline";

import { Container, CustomLink } from "@/components";

import { ProductModel } from "./models";
import { getProducts } from "./lib/actions";

import { Metadata } from "next";
import ProductsList from "./components/ProductsList";
import { Suspense } from "react";
import ProductsLoader from "./components/ProductsLoader";

export const metadata: Metadata = {
  title: "Products",
  description: "Page to show a list of products"
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
      <Suspense fallback={<ProductsLoader skeletonQuantity={9} />}>
        <ProductsList />
      </Suspense>
    </Container>
  );
}
