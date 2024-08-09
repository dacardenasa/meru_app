import { Metadata } from "next";

import { Container } from "@/components";

import UpdateProductForm from "./components/UpdateProductForm";
import { getProductDetail } from "./lib/actions";

export const metadata: Metadata = {
  title: "Product detail form",
  description: "Page to show user form to update and delete product"
};

type ProductDetailProps = {
  params: {
    id: string;
  };
};

export default async function ProductDetail({
  params: { id }
}: ProductDetailProps) {
  const details = await getProductDetail(Number(id));

  return (
    <Container>
      <h1 className="text-white mb-4 text-4xl font-bold">Update Form</h1>
      <UpdateProductForm
        description={details.description}
        name={details.name}
        price={details.price}
        productId={details.id}
      />
    </Container>
  );
}
