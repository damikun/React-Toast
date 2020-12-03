import React, { useEffect } from "react";
import { Toast } from "./ToastProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faExclamationCircle,
  faCheck,
  faInfoCircle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const VARIANTS = {
  Info: {
    base: "bg-white border-blue-500",
    iconstyle: "text-blue-500 ",
    icon: faInfoCircle,
    name: "Info",
  },

  Error: {
    base: "bg-white border-red-500 ",
    iconstyle: "text-red-500 ",
    icon: faExclamationCircle,
    name: "Error",
  },

  Warning: {
    base: "bg-white border-yellow-500",
    iconstyle: "text-yellow-500 ",
    icon: faExclamationCircle,
    name: "Warning",
  },

  Success: {
    base: "bg-white border-green-500",
    iconstyle: "text-green-500 ",
    icon: faCheck,
    name: "Success",
  },

  Default: {
    base: "bg-white border-gray-600 ",
    iconstyle: "text-gray-600 ",
    icon: faQuestionCircle,
    name: "",
  },
};

export type ToastMessage = {
  id: string;
  lifetime?: number;
  variant?: keyof typeof VARIANTS;
  onRemove?: (id: string) => void;
} & Toast;

export default function ToastMessage({
  id,
  message,
  lifetime,
  onRemove,
  variant = "Success",
}: ToastMessage) {
  const Var = VARIANTS[variant] || VARIANTS.Info;

  useEffect(() => {
    if (lifetime && onRemove) {
      setTimeout(() => {
        onRemove(id);
      }, lifetime);
    }
  }, [lifetime, onRemove, clearTimeout]);

  return (
    <div
      className={clsx(
        "flex w-full visible flex-row shadow-lg",
        "border-l-4 rounded-md duration-100 cursor-pointer",
        "transform transition-all h-16 hover:scale-102",
        Var.base
      )}
    >
      <div className="flex flex-row flex-no-wrap w-full">
        <div className="flex w-12 mx-auto my-auto text-xl select-none">
          <FontAwesomeIcon
            className={clsx("mx-auto", Var.iconstyle)}
            icon={Var.icon}
          />
        </div>
        <div className="flex-auto md:flex md:w-48 flex-col my-auto flex-no-wrap px-1">
          <div className="flex my-auto font-bold select-none">{Var.name}</div>
          <p className="text-gray-600 my-auto truncate text-sm">{message}</p>
        </div>
        <div
          onClick={() => onRemove && onRemove(id)}
          className="w-10 my-auto mx-auto text-center text-lg"
        >
          <FontAwesomeIcon
            className={clsx(
              "mx-auto text-center text-gray-600",
              "cursor-pointer hover:scale-105 transform mr-3 ml-2"
            )}
            icon={faTimes}
          />
        </div>
      </div>
    </div>
  );
}
