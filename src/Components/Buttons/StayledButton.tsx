import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";

export type StayledButtonPorps = {
  children?: React.ReactNode;
  icon?: IconProp;
  isloading?: boolean;
  loadingPlaceholder?: React.ReactNode;
  variant?: keyof typeof VARIANTS;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const VARIANTS = {
  primarygray: {
    base: "text-white hover:bg-gray-600 bg-gray-500",
  },

  primaryred: {
    base: "text-white hover:bg-red-600 bg-red-500",
  },

  primaryorange: {
    base: "text-white hover:bg-oragne-600 bg-oragne-500",
  },

  primarygreen: {
    base: "text-white hover:bg-green-600 bg-green-500",
  },

  primaryblue: {
    base: "text-white hover:bg-blue-600 bg-blue-500",
  },

  invisible: {
    base: "",
  },
};

export default function StayledButton({
  children,
  variant = "primarygray",
  isloading,
  loadingPlaceholder,
  icon,
  disabled,
  onClick,
  ...rest
}: StayledButtonPorps) {
  const Var = VARIANTS[variant] || VARIANTS.primarygray;

  function HandleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    onClick && onClick(event);
  }

  return (
    <button
      onClick={HandleClick}
      disabled={disabled || isloading}
      {...rest}
      className={clsx(
        `flex-no-wrap 
        bg-transparent 
        px-1 my-auto
        h-full  
        font-semibold 
        border 
        rounded-md 
        outline-none focus:outline-none 
        transition 
        border-transparent 
        duration-200 `,
        Var.base,
        rest.className
      )}
    >
      <div className="p-1 text-xs md:text-sm w-full">
        {icon ? (
          <div className="flex my-auto flex-nowrap gap-x-2">
            <div className="flex mx-auto my-auto">
              <FontAwesomeIcon
                className={clsx("flex mx-auto justify-center")}
                icon={icon}
              />
            </div>
            {children && (
              <div className="flex mx-auto my-auto text-center">
                {children ? children : null}
              </div>
            )}
          </div>
        ) : (
          children
        )}
      </div>
    </button>
  );
}
