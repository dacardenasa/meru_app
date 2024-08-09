import React from "react";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CustomLink } from "@/components";

import RowContent from "../RowContent";


type ProductCardProps = {
  description: string;
  id: number;
  name: string;
  price: number;
};

const _ProductCard = ({ description, id, name, price }: ProductCardProps) => {
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

export default React.memo(_ProductCard);
