import { Button, CustomLink } from "@/components";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useFormStatus } from "react-dom";

export const FormButtons = () => {
  const { pending } = useFormStatus();
  return (
    <div className="mt-6 flex justify-end gap-4">
      <CustomLink
        route="/products"
        title="Cancel"
        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
      />
      <Button disabled={pending} aria-disabled={pending} type="submit">
        {pending ? "Saving Product..." : "Create Product"}
        <CheckCircleIcon className="size-5 text-white ml-1" />
      </Button>
    </div>
  );
};
