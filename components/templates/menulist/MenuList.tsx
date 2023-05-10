import { baseUrl } from "@/pages/api/BaseUrl";
import MenuItemCard from "../../modules/cards/MenuItemCard";
import React from "react";

export default async function MenuList({
  categoryname,
  restaurantId,
}: {
  categoryname: string;
  restaurantId: string;
}) {
  const Res = await fetch(
    `${baseUrl}/api/restaurants/${restaurantId}/categories/${categoryname}`,
    {
      cache: "no-cache",
    }
  );
  const menus: INTcategory = await Res.json();

  return (
    <div className="flex flex-col md:mt-0 mt-2">
      <div className="grid  xl:grid-cols-3 grid-cols-2 md:gap-4 gap-6">
        {menus.items?.map((menu, index) => (
          <MenuItemCard
            key={menu._id + index}
            title={menu.name}
            img={menu.image}
            price={menu.base_price.toString()}
            link={`/restaurants/${restaurantId}/menu/${menu.name}`}
          />
        ))}
      </div>
    </div>
  );
}
