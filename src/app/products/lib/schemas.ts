import { z, ZodError } from "zod";
import { ProductFormState } from "../models";

export const ProductFormSchema = z.object({
  description: z.string().min(10, "Description must be at least 10 characters"),
  id: z.string(),
  name: z.string().min(3, "Name must be at least 3 characters"),
  price: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0." })
});

export const fromErrorToFormState = (error: unknown): ProductFormState => {
  if (error instanceof ZodError) {
    return {
      status: 'ERROR' as const,
      message: 'Field(s) errors!',
      errors: error.flatten().fieldErrors,
      timestamp: Date.now(),
    };
  } if (error instanceof Error) {
    return {
      status: "ERROR" as const,
      message: error.message,
      errors: {},
      timestamp: Date.now()
    };
  } else {
    return {
      status: "ERROR" as const,
      message: "An unknown error occurred",
      errors: {},
      timestamp: Date.now()
    };
  }
};

export const toFormState = (
  status: ProductFormState['status'],
  message: string
): ProductFormState => {
  return {
    status,
    message,
    errors: {},
    timestamp: Date.now(),
  };
};

export const EMPTY_FORM_STATE: ProductFormState = {
  status: 'UNSET' as const,
  message: '',
  errors: {},
  timestamp: Date.now(),
};
