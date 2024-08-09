import { Metadata } from "next";

import { Container } from "@/components";
import CreateProductForm from "./components/CreateProductForm";

export const metadata: Metadata = {
  title: 'Product create form',
  description: "Page to show user form to create product"
};

export default async function ProductDetail() {
  return (
    <Container>
      <h1 className="text-white mb-4 text-4xl font-bold">Register Form</h1>
      <CreateProductForm />
    </Container>
  );
}
