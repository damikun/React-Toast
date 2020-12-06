/* Author: Dalibor Kundrat  https://github.com/damikun */

import clsx from "clsx";
import React from "react";
import Avatar from "../Avatar/Avatar";

export default function ToastCustomMessage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row py-2 space-x-5 items-center mx-2">
        <div
          className={clsx(
            "flex flex-col relative py-2 text-base",
            "justify-start w-14 "
          )}
        >
          <div
            className={clsx(
              "flex flex-col uppercase mx-auto text-white",
              "select-none my-auto"
            )}
          >
            <Avatar
              src={"https://avatars2.githubusercontent.com/u/54806834?s=60&v=4"}
              lable={"DK"}
            />
          </div>

          <div
            className={clsx(
              "flex px-2 mx-auto items-center justify-center text-center ",
              "bottom-0 justify-center py-0.5 bg-gray-500 text-white rounded-full",
              "break-normal text-xs leading-none mt-3 font-bold",
              "flex -mt-2 text-xs "
            )}
          >
            Dalibor
          </div>
        </div>
        <div className="flex flex-col text-gray-500 ">
          <span className="font-semibold">This is custom toast</span>
          <p className="mt-1">Builded by using React hooks and context API</p>
        </div>
      </div>
    </div>
  );
}
