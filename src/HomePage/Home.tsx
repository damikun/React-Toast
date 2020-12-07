import React, { useEffect, useState } from "react";
import clsx from "clsx";
import StayledButton from "../Components/Buttons/StayledButton";
import { useToast } from "../Components/Toast/ToastProvider";
import Select from "../Components/Select/Select";
import SelectOptions from "../Components/Select/SelectOption";
import ToastDummyMessage from "../Components/ToastDummyMessage";
import { useGlobalState } from "../Providers";

const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;

export default function HomePage() {
  const toast = useToast();
  const [interval, setInterval] = useState(1500);
  const [position, setPosition] = useState("top_right");
  const globalState = useGlobalState();

  useEffect(() => {
    //@ts-ignore
    globalState?.setPosition({ variant: position });
  }, [position]);

  return (
    <div
      className={clsx(
        "mx-auto relative my-auto p-5 bg-white",
        "shadow-md rounded-md border border-gray-200 "
      )}
    >
      <div className="flex flex-col my-auto h-full space-y-5">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-3 w-32">
            <SectionHeader name={"Duration:"} />

            <div
              className={clsx(
                "flex flex-row space-x-1 md:space-x-5 w-full",
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
          <div className="flex flex-col space-y-3 w-32">
            <SectionHeader justify_end name={"Position"} />
            <div
              className={clsx(
                "flex relative flex-row space-x-1 md:space-x-5 w-full",
                "align-middle my-auto w-full"
              )}
            >
              <Select
                justify_end
                value={GetPositionText(position)}
                initinal={position}
                onChange={(value) => setPosition(value as string)}
              >
                <SelectOptions value="top_right">Top-Right</SelectOptions>
                <SelectOptions value="top_middle">Top-Middle</SelectOptions>
                <SelectOptions value="top_left">Top-Left</SelectOptions>
                <SelectOptions value="bottom_right">Bottom-Right</SelectOptions>
                <SelectOptions value="bottom_middle">
                  Bottom-Middle
                </SelectOptions>
                <SelectOptions value="bottom_left">Bottom-Left</SelectOptions>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <SectionHeader name={"Types:"} />
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
              onClick={() => toast?.pushCustom(<ToastDummyMessage />, interval)}
            >
              Custom
            </StayledButton>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <SectionHeader name={"Truncate:"} />
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

/////////////////////////////////
/////////////////////////////////

type SectionHeaderProps = {
  name: string;
  justify_end?: boolean;
};
function SectionHeader({ justify_end, name }: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "flex font-bold text-gray-500 text-base uppercase",
        justify_end === true && "justify-end "
      )}
    >
      {name}
    </div>
  );
}
function GetPositionText(value: string) {
  switch (value) {
    case "top_right":
      return "Top-Right";
    case "top_left":
      return "Top-Left";
    case "top_middle":
      return "Top-Middle";
    case "bottom_right":
      return "Bottom-Right";
    case "bottom_left":
      return "Bottom-Left";
    case "bottom_middle":
      return "Bottom-Middle";
  }
}
