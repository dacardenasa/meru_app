"use server";

import { revalidatePath } from "next/cache";

import { headers } from "@/services";
import { ProductFormState } from "../../models";
import {
  checkFormData,
  fromErrorToFormState,
  ProductSchema,
  toFormState
} from "../../lib/schemas";

export async function createProduct(_: ProductFormState, formData: FormData) {
  const { error, data } = checkFormData(formData);

  if (error) {
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
  revalidatePath("/products");
  return toFormState("SUCCESS", "Product created successfully!");
}
