import React from "react";
import clsx from "clsx";
import StayledButton from "../Components/Buttons/StayledButton";
import { useToast } from "../Components/Toast/ToastProvider";
import ToastCustomMessage from "../Components/Toast/ToastCustomMessage";

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
            "flex relative flex-row space-x-5 w-full",
            "justify-center align-middle my-auto "
          )}
        >
          <StayledButton
            variant="primaryred"
            onClick={() =>
              toast?.pushError(
                "Oppps Errordddddddddddddddddddddddddddddddddddddddddddddddddddddd sdddddddd sdddddddddddddddddd sdddddddd sdddddddddddddddddd sdddddddd sdddddddddsd dsd"
              )
            }
          >
            Error
          </StayledButton>
          <StayledButton
            variant="primaryorange"
            onClick={() =>
              toast?.pushWarning("Warning appear", 1000, "truncate-2-lines")
            }
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
          <StayledButton
            variant="primarygray"
            onClick={() => toast?.pushCustom(<ToastCustomMessage />, 2000)}
          >
            Custom
          </StayledButton>
        </div>
      </div>
    </div>
  );
}
