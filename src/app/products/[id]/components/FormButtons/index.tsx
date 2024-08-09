import { Button, CustomLink } from "@/components";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/outline";

type FormButtonsProps = {
  toggleModal: () => void;
};

export const FormButtons = ({ toggleModal }: FormButtonsProps) => {
  return (
    <div className="mt-6 flex justify-end gap-4">
      <CustomLink
        route="/products"
        title="Cancel"
        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
      />
      <Button
        type="button"
        onClick={toggleModal}
        className="bg-red-500 hover:bg-red-400"
      >
        Delete
        <TrashIcon className="size-4 text-white ml-1" />
      </Button>
      <Button type="submit">
        Update
        <CheckCircleIcon className="size-5 text-white ml-1" />
      </Button>
    </div>
  );
};
