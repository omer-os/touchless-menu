import { getCategoriesBySubdomain } from "@/lib/GetData";
import ScrollableCategoriesListWrapper from "./ScrollableCategoriesListWrapper";

type PageProps = {
  restaurantId: string;
};

export default async function CategoriesList({ restaurantId }: PageProps) {
  const Categories=
    getCategoriesBySubdomain(restaurantId);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-baseline md:mt-0 mt-6">
        <div className="text-2xl font-bold">Categories</div>
        <div className="text-blue-500 hover:underline cursor-pointer">
          See all
        </div>
      </div>

      <ScrollableCategoriesListWrapper
        categories={Categories}
        restaurantId={restaurantId}
      />
    </div>
  );
}
