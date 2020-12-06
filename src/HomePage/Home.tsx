import React, { useState } from "react";
import clsx from "clsx";
import StayledButton from "../Components/Buttons/StayledButton";
import { useToast } from "../Components/Toast/ToastProvider";
import ToastCustomMessage from "../Components/Toast/ToastCustomMessage";
import Select from "../Components/Select/Select";
import SelectOptions from "../Components/Select/SelectOption";

const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;

export default function HomePage() {
  const toast = useToast();
  const [interval, setInterval] = useState(1500);
  return (
    <div
      className={clsx(
        "mx-auto relative my-auto p-5 bg-white",
        "shadow-md rounded-md border border-gray-200 "
      )}
    >
      <div className="flex flex-col my-auto h-full space-y-5">
        <div className="flex flex-col space-y-3">
          <div className=" font-bold text-gray-500 text-base uppercase">
            Duration:
          </div>
          <div
            className={clsx(
              "flex relative flex-row space-x-1 md:space-x-5 w-full",
              "align-middle my-auto "
            )}
          >
            <Select
              initinal={interval}
              onChange={(value) => setInterval(value as number)}
            >
              <SelectOptions value="1000">1000 ms</SelectOptions>
              <SelectOptions value="2500">2500 ms</SelectOptions>
              <SelectOptions value="5000">5000 ms</SelectOptions>
            </Select>

          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className=" font-bold text-gray-500 text-base uppercase">
            Types:
          </div>
          <div
            className={clsx(
              "flex relative flex-row space-x-1 md:space-x-5 w-full",
              "justify-center align-middle my-auto "
            )}
          >
            <StayledButton
              variant="primaryred"
              onClick={() => toast?.pushError("Oppps Error", interval)}
            >
              Error
            </StayledButton>
            <StayledButton
              variant="primaryorange"
              onClick={() =>
                toast?.pushWarning(
                  "Warning appear",
                  interval,
                  "truncate-2-lines"
                )
              }
            >
              Warning
            </StayledButton>
            <StayledButton
              variant="primarygreen"
              onClick={() => toast?.pushSuccess("Action success", interval)}
            >
              Success
            </StayledButton>
            <StayledButton
              variant="primaryblue"
              onClick={() => toast?.pushInfo("Info message", interval)}
            >
              Info
            </StayledButton>
            <StayledButton
              variant="primarygray"
              onClick={() =>
                toast?.pushCustom(<ToastCustomMessage />, interval)
              }
            >
              Custom
            </StayledButton>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className=" font-bold text-gray-500 text-base uppercase">
            Truncate:
          </div>
          <div
            className={clsx(
              "flex relative flex-row space-x-1 md:space-x-5 w-full",
              " align-middle my-auto "
            )}
          >
            <StayledButton
              variant="secondaryblue"
              onClick={() =>
                toast?.pushInfo(text, interval, "truncate-1-lines")
              }
            >
              1 line
            </StayledButton>
            <StayledButton
              variant="secondaryblue"
              onClick={() =>
                toast?.pushInfo(text, interval, "truncate-2-lines")
              }
            >
              2 lines
            </StayledButton>
            <StayledButton
              variant="secondaryblue"
              onClick={() =>
                toast?.pushInfo(text, interval, "truncate-3-lines")
              }
            >
              3 lines
            </StayledButton>
          </div>
        </div>
      </div>
    </div>
  );
}
