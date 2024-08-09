"use client";

import { useFormState } from "react-dom";

import { ProductForm } from "@/components";
import { EMPTY_FORM_STATE } from "@/app/products/lib/schemas";
import { useToastMessage } from "@/hooks";

import { FormButtons } from "../FormButtons";
import { createProduct } from "../../lib/actions";

export default function CreateProductForm() {
  const [state, dispatch] = useFormState(createProduct, EMPTY_FORM_STATE);
  useToastMessage(state);

  return (
    <ProductForm
      formDispatch={dispatch}
      initialValues={{ name: "", description: "", price: 0 }}
      state={state}
    >
      <FormButtons />
    </ProductForm>
  );
}
