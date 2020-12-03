import React from "react";
import clsx from "clsx";
import StayledButton from "../Components/Buttons/StayledButton";
import { useToast } from "../Components/Toast/ToastProvider";

export default function HomePage() {
  const toast = useToast();

  return (
    <div
      className={clsx(
        "mx-auto relative my-auto p-5 bg-white",
        "shadow-md rounded-md border border-gray-200 "
      )}
    >
      <div className="flex my-auto h-full">
        <div
          className={clsx(
            "flex relative flex-row gap-x-5 w-full",
            "justify-center align-middle my-auto "
          )}
        >
          <StayledButton
            variant="primaryred"
            onClick={() => toast?.pushError("Oppps Error", 5000)}
          >
            Error
          </StayledButton>
          <StayledButton
            variant="primaryorange"
            onClick={() => toast?.pushWarning("Warning appear")}
          >
            Warning
          </StayledButton>
          <StayledButton
            variant="primarygreen"
            onClick={() => toast?.pushSuccess("Action success")}
          >
            Success
          </StayledButton>
          <StayledButton
            variant="primaryblue"
            onClick={() => toast?.pushInfo("Info message")}
          >
            Info
          </StayledButton>
        </div>
      </div>
    </div>
  );
}
