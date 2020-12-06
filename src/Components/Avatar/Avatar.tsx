/* Author: Dalibor Kundrat  https://github.com/damikun */

import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";

export type AvatarProps = {
  src?: string;
  lable?: string;
  icon?: IconProp;
};

export default function Avatar({ src, lable, icon }: AvatarProps) {
  const [loading, setLoading] = useState(true);
  const [error, setLoadError] = useState(false);

  const image = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (image?.current?.complete) setLoading(false);
  }, []);

  return (
    <div
      className={clsx(
        "flex shadow-md select-none flex-no-wrap text-lg",
        "uppercase text-gray-800 font-semibold ",
        " mx-auto my-auto bg-gray-100",
        "items-center justify-center w-10 h-10 rounded-full"
      )}
    >
      <div
        className={clsx("rounded-full", "font-normal")}
        style={{ display: loading ? "block" : "none" }}
      >
        {icon ? (
          <FontAwesomeIcon
            className={"flex mx-auto justify-center"}
            icon={icon}
          />
        ) : (
          <div>{lable}</div>
        )}
      </div>
      <div
        className="flex w-full h-full"
        style={{ display: loading ? "none" : "block" }}
      >
        {src !== undefined && src !== null && !error && (
          <img
            alt="User avatar"
            ref={image}
            className={clsx("w-full h-full rounded-full")}
            src={src ? src : undefined}
            onLoad={(e) => setLoading(false)}
            onError={(e) => setLoadError(true)}
          />
        )}
      </div>
    </div>
  );
}
