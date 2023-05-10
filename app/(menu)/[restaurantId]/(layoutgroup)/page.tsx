import MenuList from "@/components/templates/menulist/MenuList";
import { getAllRestaurants } from "@/lib/GetData";

export async function generateStaticParams() {
  const AllRestaurants = getAllRestaurants();

  return AllRestaurants.map((restaurant) => ({
    slug: restaurant.name,
  }));
}

type Props = {
  params: {
    restaurantId: string;
    categoryname: string;
  };
};

export default function page({ params }: Props) {
  return (
    <div>
      <MenuList
        restaurantId={params.restaurantId}
        categoryname={params.categoryname}
      />
    </div>
  );
}
