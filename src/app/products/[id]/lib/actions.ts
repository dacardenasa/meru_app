"use server";

import { revalidatePath } from "next/cache";

import { headers } from '@/services'
import {
  UpdateProductSchema
} from "./schemas";
import { ProductFormState, ProductModel } from "../../models";
import { fromErrorToFormState, toFormState } from "../../lib/schemas";

export async function getProductDetail(id: number) {
  try {
    const res = await fetch(`${process.env.API_URL}/products/${id}`, {
      cache: "no-store"
    });
    const data: ProductModel = await res.json();
    return data;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export async function updateProduct(
  id: number,
  _: ProductFormState,
  formData: FormData
) {
  const { success, error, data } = UpdateProductSchema.safeParse({
    description: formData.get("description"),
    name: formData.get("name"),
    price: formData.get("price")
  });

  if (!success) {
    return fromErrorToFormState(error);
  }

  const { description, name, price } = data;

  try {
    await fetch(`${process.env.API_URL}/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({ description, name, price }),
      headers
    });
  } catch (error) {
    fromErrorToFormState(error);
  }
  revalidatePath("/products");
  return toFormState("SUCCESS", "Product updated successfully!");
}

export async function deleteProduct(id: number) {
  try {
    await fetch(`${process.env.API_URL}/products/${id}`, {
      method: "DELETE",
      headers
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
  revalidatePath("/products");
}
