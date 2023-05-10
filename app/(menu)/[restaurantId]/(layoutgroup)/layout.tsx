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

export function generateStaticParams() {
  const AllRestaurants = getAllRestaurants();

  return AllRestaurants.map((rest) => ({
    slug: rest.subdomain,
  }));
}

export default async function layout(props: Props) {
  return (
    <>
      <Suspense fallback={<CategoriesListSkeleton />}>
        {/* @ts-expect-error - Server Component */}
        <CategoriesList restaurantId={props.params.restaurantId} />
      </Suspense>
      {props.children}
    </>
  );
}
