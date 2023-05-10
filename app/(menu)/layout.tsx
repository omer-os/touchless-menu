import RightSideBar from "@/components/modules/sidebar/RightSideBar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <>{children}</>
    </>
  );
}
