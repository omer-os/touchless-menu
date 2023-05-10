"use client";
import Sk_CategoryCard from "@/components/loading/Sk_CategoryCard";
import CategoriesList from "@/components/templates/categoriesList/CategoriesList";
import MenuList from "@/components/templates/menulist/MenuList";
import React, { Suspense } from "react";

type Props = {
  params: {
    restaurantId: string;
    categoryname: string;
  };
};

export default async function page({ params }: Props) {
  return (
    <div>
      {params.categoryname && (
        <Suspense fallback={<div className="flex flex-col gap-2"></div>}>
          <div className="text-2xl font-bold mt-4">Menu</div>

          {/* @ts-expect-error Server Component */}
          <MenuList
            restaurantId={params.restaurantId}
            categoryname={params.categoryname}
          />
        </Suspense>
      )}
    </div>
  );
}
