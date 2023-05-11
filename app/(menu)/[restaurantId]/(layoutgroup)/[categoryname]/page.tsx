"use client";
import MenuList from "@/components/templates/menulist/MenuList";
import React, { Suspense } from "react";

type Props = {
  params: {
    restaurantId: string;
    categoryname: string;
  };
};

export default function page({ params }: Props) {
  return (
    <div>
      {params.categoryname && (
        <Suspense fallback={<div className="flex flex-col gap-2"></div>}>
          <div className="mt-4 text-2xl font-bold">Menu</div>

          {params.categoryname && (
            <MenuList
              restaurantId={params.restaurantId}
              categoryname={params.categoryname}
            />
          )}
        </Suspense>
      )}
    </div>
  );
}
