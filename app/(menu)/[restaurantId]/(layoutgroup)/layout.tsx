import { CategoriesListSkeleton } from "@/components/loading/CategoriesListSkeleton";
import CategoriesList from "@/components/templates/categoriesList/CategoriesList";
import React, { Suspense } from "react";

type Props = {
  params: {
    restaurantId: string;
  };
  children: React.ReactNode;
};

export default async function layout(props: Props) {
  return (
    <div>
      <Suspense fallback={<CategoriesListSkeleton />}>
        {/* @ts-expect-error - Server Component */}
        <CategoriesList restaurantId={props.params.restaurantId} />
      </Suspense>
      {props.children}
    </div>
  );
}
