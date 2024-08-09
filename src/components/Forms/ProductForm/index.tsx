import { ProductFormState } from "@/app/products/models";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

type ProductFormProps = {
  initialValues: {
    name: string;
    description: string;
    price: number;
  };
  formDispatch: (formData: FormData) => void;
  state: ProductFormState;
  children: React.ReactNode;
};

const ProductForm = ({
  children,
  initialValues,
  formDispatch,
  state
}: ProductFormProps) => {
  return (
    <form action={formDispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6 text-black">
        {/* Product name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name:
          </label>
          <div className="mt-2 rounded-md">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={initialValues.name}
                placeholder="Enter product name"
                className="peer block w-full rounded-md border border-gray-200 p-2 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="name-error"
              />
            </div>
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Product description */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Description:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea
                id="description"
                name="description"
                defaultValue={initialValues.description}
                placeholder="Enter product description"
                className="peer block w-full rounded-md border border-gray-200 p-2 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="description-error"
                rows={4}
                cols={40}
              />
            </div>
          </div>
          <div id="description-error" aria-live="polite" aria-atomic="true">
            {state.errors?.description &&
              state.errors.description.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Product price */}
        <div className="mb-4">
          <label htmlFor="price" className="mb-2 block text-sm font-medium">
            Price:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                defaultValue={initialValues.price}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 p-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="amount-error" aria-live="polite" aria-atomic="true">
            {state.errors?.price &&
              state.errors.price.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </div>
      {children}
    </form>
  );
};

export default ProductForm;