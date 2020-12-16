/* Author: Dalibor Kundrat  https://github.com/damikun */

import clsx from "clsx";
import React, { useContext } from "react";
import ToastMessage from "./ToastMessage";
import { ToastContext } from "./ToastProvider";

export type ToastContainerProps = {
  variant?: keyof typeof VARIANTS;
};

const VARIANTS = {
  top_left: {
    style: "top-0 left-0",
  },
  top_right: {
    style: "top-0 right-0",
  },
  bottom_right: {
    style: "bottom-0 right-0",
  },
  bottom_left: {
    style: "bottom-0 left-0",
  },
  top_middle: {
    style: "top-0 left-1/2 -translate-x-1/2 transform",
  },
  bottom_middle: {
    style: "bottom-0 left-1/2 -translate-x-1/2 transform",
  },
  undefined: {
    style: "top-0 right-0",
  },
};

export default function ToastContainer({
  variant = "top_right",
}: ToastContainerProps) {
  const context = useContext(ToastContext);

  const Var = VARIANTS[variant] || VARIANTS.top_right;

  function handleRemove(id: string) {
    context?.remove(id);
  }

  return (
    <div
      className={clsx(
        Var.style,
        "fixed z-50 w-full md:max-w-sm",
        "p-4 md:p-4 max-h-screen overflow-hidden pointer-events-none"
      )}
    >
      <div
        className={clsx(
          "flex-1 flex-col fade w-full mr-8 justify-end pointer-events-none"
        )}
      >
        {context?.data.map((toast) => {
          return (
            <div
              key={toast.id}
              className={clsx(
                "flex py-1 w-full",
                "transform transition-all duration-300 pointer-events-auto"
              )}
            >
              <ToastMessage
                id={toast.id}
                message={toast.message}
                type={toast.type}
                header={toast.header}
                icon={toast.icon}
                truncate={toast.truncate}
                onRemove={handleRemove}
                lifetime={toast.lifetime}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
