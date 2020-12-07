import React, { useContext, useState } from "react";
import { ToastContainerProps } from "./Components/Toast/ToastContainer";
import ToastProvider from "./Components/Toast/ToastProvider";

export type GlobalContextType = {
  position: ToastContainerProps;
  // will believe  that user pass correct string:)
  setPosition: React.Dispatch<React.SetStateAction<ToastContainerProps>>;
};

export const GlobalContext = React.createContext<GlobalContextType | undefined>(
  undefined
);

export const useGlobalState = () => useContext(GlobalContext);

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  const [position, setPosition] = useState<ToastContainerProps>({
    variant: "top_right",
  });

  return (
    <GlobalContext.Provider
      value={{
        position: position,
        setPosition: setPosition,
      }}
    >
      <ToastProvider variant={position.variant}>{children}</ToastProvider>
    </GlobalContext.Provider>
  );
};

export default Providers;
