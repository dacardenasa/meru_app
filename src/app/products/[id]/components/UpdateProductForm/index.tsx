"use client";

import { useFormState } from "react-dom";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import { ProductForm, ResponsiveModal } from "@/components";
import { EMPTY_FORM_STATE } from "@/app/products/lib/schemas";
import { useToastMessage } from "@/hooks";

import { deleteProduct, updateProduct } from "../../lib/actions";

import FormButtons from "../FormButtons";
import ModalContent from "../ModalContent";

type UpdateProductFormProps = {
  description: string;
  name: string;
  price: number;
  productId: number;
};

const UpdateProductForm = ({
  description,
  name,
  price,
  productId
}: UpdateProductFormProps) => {
  const updateProductWithId = updateProduct.bind(null, productId);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, dispatch] = useFormState(updateProductWithId, EMPTY_FORM_STATE);
  const router = useRouter();

  useToastMessage(state);

  const toggleModal = () => setIsModalOpen((c) => !c);

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(productId);
      toggleModal();
      toast.success("Product deleted successfully!");
      router.push("/products");
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  };


  return (
    <>
      <ProductForm
        formDispatch={dispatch}
        initialValues={{ name, description, price }}
        state={state}
      >
        <FormButtons toggleModal={toggleModal} />
      </ProductForm>
      <ResponsiveModal isOpen={isModalOpen} handleClosemodal={toggleModal}>
        <ModalContent
          handleDelete={handleDeleteProduct}
          handleToggleModal={toggleModal}
        />
      </ResponsiveModal>
    </>
  );
};

export default UpdateProductForm;