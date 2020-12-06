/* Author: Dalibor Kundrat  https://github.com/damikun */

import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useOutsideClick } from "../../Hooks/useOutsideClick";

type SelectProps = {
  initinal: number | string;
  children: React.ReactNode;
  onChange?: (value: string | number) => void;
};
export default function Select({ children, onChange, initinal }: SelectProps) {
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

  return (
    <>
      <div
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen((e) => !e);
        }}
        className={clsx(
          "flex flex-col relative w-full border-2 border-transparent",
          "hover:border-gray-300 transition duration-150",
          "focus:border-blue-500 rounded-md cursor-pointer "
        )}
      >
        <div className="flex relative px-1">{selected}</div>
        <div>
          {open && (
            <div
              onClick={(e) => {
                try {
                  const value = (e.target as HTMLOptionElement).value;

                  const number = parseInt(value);
                  if (number !== 0) setSelected(number);
                } catch {}
              }}
              className={clsx(
                "flex flex-col absolute visible",
                "rounded-md shadow-xl bg-white",
                "z-10 border border-gray-200 mt-1"
              )}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
