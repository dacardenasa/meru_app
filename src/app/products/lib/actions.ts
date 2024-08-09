"use server";

import { ProductModel } from "../models";

export async function getProducts() {
  try {
    const res = await fetch(`${process.env.API_URL}/products`, {
      cache: "no-store"
    });
    const data: ProductModel[] = await res.json();
    return data;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}
