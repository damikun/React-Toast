import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return <div className="flex h-screen w-screen bg-gray-100">{children}</div>;
}
