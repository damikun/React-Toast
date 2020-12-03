import React, { useCallback, useContext, useState } from "react";
import ToastContainer from "./ToastContainer";

/////////////////////////////////////
/// Types
/////////////////////////////////////

export type ToastProviderProps = {
  children: React.ReactNode;
};

type TostMessageType = "Info" | "Success" | "Warning" | "Error" | "Default";

export type Toast = {
  id: string;
  type: TostMessageType;
  message: string;
  lifetime: number;
};

export type ToastContextType = {
  data: Array<Toast>;
  pushError(message: string, lifetime?: number): void;
  pushWarning(message: string, lifetime?: number): void;
  pushSuccess(message: string, lifetime?: number): void;
  pushInfo(message: string, lifetime?: number): void;
  push(message: string, type: TostMessageType, lifetime?: number): void;
  remove(id: string): void;
};

/////////////////////////////////////
/// Global
/////////////////////////////////////

export const ToastContext = React.createContext<ToastContextType | undefined>(
  undefined
);

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const useToast = () => useContext(ToastContext);

/////////////////////////////////////
/// Implementation
/////////////////////////////////////

const DEFAULT_INTERVAL = 2500;

export default function ToastProvider({ children }: ToastProviderProps) {
  const [data, setData] = useState<Array<Toast>>([]);

  const Push = useCallback(
    (
      message: string,
      type: TostMessageType,
      lifetime: number = DEFAULT_INTERVAL
    ) => {
      if (message) {
        const new_item: Toast = {
          id: uuidv4(),
          message: message,
          type: type,
          lifetime: lifetime,
        };

        setData((prevState) => [...prevState, new_item]);
      }
    },
    [setData, data]
  );

  const PushError = useCallback(
    (message: string, lifetime?: number) => Push(message, "Error", lifetime),
    [Push]
  );
  const PushWarning = useCallback(
    (message: string, lifetime?: number) => Push(message, "Warning", lifetime),
    [Push]
  );
  const PushSuccess = useCallback(
    (message: string, lifetime?: number) => Push(message, "Success", lifetime),
    [Push]
  );
  const PushInfo = useCallback(
    (message: string, lifetime?: number) => Push(message, "Info", lifetime),
    [Push]
  );

  const ToastContexd = useCallback(() => {
    return {
      data: data,
      pushError: PushError,
      pushWarning: PushWarning,
      pushSuccess: PushSuccess,
      pushInfo: PushInfo,
      push: Push,

      async remove(id: string) {
        setData((prevState) => prevState.filter((e) => e.id != id));
      },
    };
  }, [data, PushError, PushWarning, PushSuccess, PushInfo, Push]);

  return (
    <ToastContext.Provider value={ToastContexd()}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
}
