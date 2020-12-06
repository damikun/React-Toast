/* Author: Dalibor Kundrat  https://github.com/damikun */

import React from "react";

type SelectOptionsProps = {
  children: React.ReactNode;
  value: number | string;
};
export default function SelectOptions({ children, value }: SelectOptionsProps) {
  return (
    <option
      value={value}
      className="flex hover:bg-gray-100 py-0.5 px-2 cursor-pointer"
    >
      {children}
    </option>
  );
}
