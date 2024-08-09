import React from "react";

type RowProps = {
  label: string;
  value: string;
};

export const RowContent = ({ label, value }: RowProps) => {
  return (
    <div className="flex flex-col">
      <p className="font-bold">{label}</p>
      <p className="font-normal whitespace-pre w-full overflow-hidden text-ellipsis">
        {value}
      </p>
    </div>
  );
};
