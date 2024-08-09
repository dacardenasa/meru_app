import { Button } from "@/components";
import React from "react";

type ModalContentProps = {
  handleToggleModal: () => void;
  handleDelete: () => void;
};

const _ModalContent = ({
  handleToggleModal,
  handleDelete
}: ModalContentProps) => {
  return (
    <div className="p-6 flex justify-center items-center flex-col">
      <h1 className="text-black mb-2">¿Are you sure to delete this product?</h1>
      <div className="flex w-full items-center justify-center gap-4">
        <Button
          className="w-1/2 flex justify-center"
          type="button"
          onClick={handleToggleModal}
        >
          Cancel
        </Button>
        <Button className="w-1/2 flex justify-center" onClick={handleDelete}>
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default React.memo(_ModalContent);
