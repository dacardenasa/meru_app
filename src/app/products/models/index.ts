export type ProductModel = {
  id: number;
  name: string;
  description: string;
  price: number;
  created_at: Date;
  updated_at: Date;
};

export type ProductFormState = {
  status: "UNSET" | "SUCCESS" | "ERROR";
  errors: Record<string, string[] | undefined>;
  message: string;
  timestamp: number;
};
