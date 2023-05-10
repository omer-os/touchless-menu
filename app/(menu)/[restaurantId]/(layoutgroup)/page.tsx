import MenuList from "@/components/templates/menulist/MenuList";
import { baseUrl } from "@/pages/api/BaseUrl";

export async function generateStaticParams() {
  const res = await fetch(`${baseUrl}/api/restaurants`);

  const restaurants: INTRestaurant[] = await res.json();

  return restaurants.map((restaurant) => ({
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
  const categoriesRes = await fetch(
    `${baseUrl}/api/restaurants/${params.restaurantId}/categories`
  );
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
