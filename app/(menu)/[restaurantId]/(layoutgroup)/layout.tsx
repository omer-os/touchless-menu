import { CategoriesListSkeleton } from "@/components/loading/CategoriesListSkeleton";
import CategoriesList from "@/components/templates/categoriesList/CategoriesList";
import { getAllRestaurants } from "@/lib/GetData";
import React, { Suspense } from "react";

type Props = {
  params: {
    restaurantId: string;
  };
  children: React.ReactNode;
};

export default async function layout(props: Props) {
  return (
    <>
      <CategoriesList restaurantId={props.params.restaurantId} />
      {props.children}
    </>
  );
}
