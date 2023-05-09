import LeftSideBar from "@/components/modules/sidebar/LeftSideBar";
import React from "react";
import MainNavBar from "../../modules/nav/MainNavBar";
import RightSideBar from "@/components/modules/sidebar/RightSideBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <LeftSideBar />

      <div className="flex flex-col flex-1">
        <MainNavBar />
        <div className="flex-1 overflow-y-scroll">{children}</div>
      </div>

      <RightSideBar />
    </div>
  );
}
