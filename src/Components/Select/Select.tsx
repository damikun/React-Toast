/* Author: Dalibor Kundrat  https://github.com/damikun */

import clsx from "clsx";
import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
import { useOutsideClick } from "../../Hooks/useOutsideClick";

type SelectProps = {
  initinal: number | string;
  value?: string;
  children: React.ReactNode;
  onChange?: (value: string | number) => void;
  justify_end?: boolean;
};

export type SelectContext = {
  onSelect(value: string | number): void;
};

export const SelectContext = React.createContext<SelectContext | undefined>(
  undefined
);

export default function Select({
  children,
  onChange,
  initinal,
  justify_end = false,
  value,
}: SelectProps) {
  const [open, setIsOpen] = useState(false);

  const [selected, setSelected] = useState(initinal);

  useEffect(() => {
    onChange && onChange(selected);
  }, [selected, onChange]);

  const ref = useRef(null);

  function onClickOutside() {
    setIsOpen(false);
  }

  useOutsideClick(ref, onClickOutside);

  const handleSlect = useCallback((value: string | number) => {
    setSelected(value);
    setIsOpen(false);
  }, []);

  const Context = useCallback(() => {
    return {
      onSelect: handleSlect,
    };
  }, []);

  return (
    <SelectContext.Provider value={Context()}>
      <div
        ref={ref}
        onMouseDown={(e) => {
          e.preventDefault();
          setIsOpen((e) => !e);
        }}
        className={clsx(
          "flex flex-col w-full border-2 border-transparent",
          "hover:border-gray-300 transition duration-150",
          "focus:border-blue-500 rounded-md cursor-pointer"
        )}
      >
        <div className={clsx("flex px-1", justify_end && "justify-end")}>
          {value ? value : selected}
        </div>
        <div className=" h-full relative">
          {open == true && (
            <div
              className={clsx(
                "flex flex-col absolute z-10",
                "rounded-md shadow-xl bg-white",
                "border border-gray-200 mt-1 buttom-0"
              )}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </SelectContext.Provider>
  );
}
