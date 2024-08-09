import { ProductFormSchema } from "../../lib/schemas";

export const CreateProductSchema = ProductFormSchema.omit({ id: true });
