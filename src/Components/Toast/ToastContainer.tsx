import clsx from "clsx";
import React, { useContext } from "react";
import ToastMessage from "./ToastMessage";
import { ToastContext } from "./ToastProvider";

export default function ToastContainer() {
  const context = useContext(ToastContext);

  function handleRemove(id: string) {
    context?.remove(id);
  }

  return (
    <div
      className={clsx(
        "absolute top-0 right-0 z-50 w-full md:max-w-sm",
        "p-4 md:p-4 max-h-screen overflow-hidden"
      )}
    >
      <div className={clsx("flex-1 flex-col fade w-full mr-8 justify-end")}>
        {context?.data.map((toast) => {
          return (
            <div
              key={toast.id}
              className={clsx(
                "flex py-1 w-full",
                "transform transition-all duration-300"
              )}
            >
              <ToastMessage
                id={toast.id}
                message={toast.message}
                type={toast.type}
                header={toast.header}
                icon={toast.icon}
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
