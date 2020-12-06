/* Author: Dalibor Kundrat  https://github.com/damikun */

import React, { useContext } from "react";
import { SelectContext } from "./Select";

type SelectOptionsProps = {
  children: React.ReactNode;
  value: number | string;
};

export type CustomDivProps = {
  myval: string | number;
} & React.HTMLProps<HTMLDivElement>;

class CustomDiv extends React.Component<CustomDivProps, {}> {
  render() {
    return <div {...this.props} />;
  }
}

export default function SelectOptions({ children, value }: SelectOptionsProps) {
  const context = useContext(SelectContext);
  return (
    <CustomDiv
      onMouseDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
        context?.onSelect(value);
      }}
      myval={value}
      className="hover:bg-gray-100 py-0.5 px-2 cursor-pointer"
    >
      {children}
    </CustomDiv>
  );
}
