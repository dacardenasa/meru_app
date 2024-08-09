import { ProductFormSchema } from "../../lib/schemas";

export const UpdateProductSchema = ProductFormSchema.omit({ id: true });
