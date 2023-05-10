import LeftSideBar from "@/components/modules/sidebar/LeftSideBar";
import React from "react";
import MainNavBar from "../../modules/nav/MainNavBar";
import RightSideBar from "@/components/modules/sidebar/RightSideBar";
import BottomNavigation from "@/components/modules/bottomnav/BottomNavigation";
import MainContextWrapper from "./MainLayoutWrapper";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainContextWrapper>
      <div className="h-screen grid 
      
      lg:grid-cols-[5em_minmax(30em,_1fr)_minmax(min-content,_28em)] 
      sm:grid-cols-[5em_minmax(22em,_1fr)] 
      grid-cols-1 grid-rows-1 w-full">
        
        <LeftSideBar key={"jrblibrbiyrugv"} />

        <div key={"ojuerbpiuqeyvfrnoi"} className="flex flex-col flex-1">
          <MainNavBar />
          <div className="py-4 pb-24 sm:px-7 px-4 overflow-y-scroll">
            {children}
          </div>
          <BottomNavigation />
        </div>

        <RightSideBar />
      </div>
    </MainContextWrapper>
  );
}
