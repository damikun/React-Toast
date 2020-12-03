import React, { useContext } from "react";
import ToastMessage from "./ToastMessage";
import { ToastContext } from "./ToastProvider";

export default function ToastContainer() {
  const context = useContext(ToastContext);

  function handleRemove(id: string) {
    context?.remove(id);
  }

  return (
    <div className="absolute top-0 right-0 z-50 w-full md:w-auto p-4 md:p-4 max-h-screen overflow-hidden">
      <div className="flex-auto  md:flex fade w-full flex-col relative mr-8 transform transition-all duration-300">
        {context?.data.map((toast) => {
          return (
            <div className="flex py-1 fade show w-full transform transition-all duration-300">
              <ToastMessage
                id={toast.id}
                message={toast.message}
                type={toast.type}
                variant={toast.type}
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
