import MenuList from "@/components/templates/menulist/MenuList";
import { baseUrl } from "@/pages/api/BaseUrl";
import { AllRestaurants } from "@/pages/api/restaurants";

export async function generateStaticParams() {
  const res = AllRestaurants;

  return AllRestaurants.map((restaurant) => ({
    slug: restaurant.name,
  }));
}

type Props = {
  params: {
    restaurantId: string;
    categoryname: string;
  };

  searchParams: {
    category?: string;
  };
};

export default async function page({ params, searchParams }: Props) {
  const categoriesRes =
    await `${baseUrl}/api/restaurants/${params.restaurantId}/categories`;
  const categories = await categoriesRes.json();
  return (
    <div>
      {/* @ts-expect-error - Server Component */}
      <MenuList
        restaurantId={params.restaurantId}
        categoryname={searchParams.category || ""}
      />
    </div>
  );
}
