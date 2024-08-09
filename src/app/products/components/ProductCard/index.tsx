import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { RowContent } from "../RowContent";
import { CustomLink } from "@/components";

type ProductCardProps = {
  description: string;
  id: number;
  name: string;
  price: number;
};

const ProductCard = ({ description, id, name, price }: ProductCardProps) => {
  return (
    <div className="flex h-fit flex-col p-4 rounded-lg bg-white text-black">
      <RowContent label="Name:" value={name} />
      <RowContent label="Description:" value={description} />
      <RowContent label="Price:" value={`$${price}`} />
      <CustomLink
        route={`/products/${id}`}
        title="Go to product detail"
        icon={<ArrowRightIcon className="size-5 text-black ml-1" />}
      />
    </div>
  );
};

export default ProductCard;
