import { ProductFormState } from "@/app/products/models";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";
import { toast } from "react-hot-toast";

const useToastMessage = (formState: ProductFormState) => {
  const router = useRouter();
  const prevTimestamp = useRef(formState.timestamp);
  const showToast =
    formState.message && formState.timestamp !== prevTimestamp.current;

  useEffect(() => {
    if (showToast) {
      if (formState.status === "ERROR") {
        toast.error(formState?.message ?? "");
      } else {
        toast.success(formState?.message ?? "");
        router.push("/products");
      }

      prevTimestamp.current = formState.timestamp;
    }
  }, [formState, showToast]);
};

export { useToastMessage };
