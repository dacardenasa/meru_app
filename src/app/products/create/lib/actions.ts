"use server";

import { revalidatePath } from "next/cache";

import { headers } from '@/services'
import {
  CreateProductSchema,
} from "./schemas";
import { ProductFormState } from "../../models";
import { fromErrorToFormState, toFormState } from "../../lib/schemas";

export async function createProduct(
  _: ProductFormState,
  formData: FormData
) {
  const { success, error, data } = CreateProductSchema.safeParse({
    description: formData.get("description"),
    name: formData.get("name"),
    price: formData.get("price")
  });

  if (!success) {
    return fromErrorToFormState(error);
  }

  const { description, name, price } = data;

  try {
    await fetch(`${process.env.API_URL}/products`, {
      method: "POST",
      body: JSON.stringify({ description, name, price }),
      headers
    });
  } catch (error) {
    fromErrorToFormState(error);
  }
  revalidatePath("/products", "page");
  return toFormState("SUCCESS", "Product created successfully!");
}