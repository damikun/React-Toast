import React from "react";
import ToastProvider from "./Components/Toast/ToastProvider";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <ToastProvider>{children}</ToastProvider>;
};

export default Providers;
