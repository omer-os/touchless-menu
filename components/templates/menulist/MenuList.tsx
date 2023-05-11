import { getCategoryBySubdomain } from "@/lib/GetData";
import MenuItemCard from "../../modules/cards/MenuItemCard";
import React from "react";

export default function MenuList({
  categoryname,
  restaurantId,
}: {
  categoryname: string;
  restaurantId: string;
}) {
  const menus = getCategoryBySubdomain(restaurantId, categoryname);

  return (
    <div className="flex flex-col mt-2 md:mt-3">
      <div className="grid grid-cols-2 gap-6 xl:grid-cols-3 md:gap-4">
        {menus?.items.length === 0 && (
          <div className="text-lg font-bold capitalize">select a category</div>
        )}
        {menus?.items.map((menu, index) => (
          <MenuItemCard
            key={menu._id + index}
            title={menu.name}
            img={menu.image}
            price={menu.base_price.toString()}
            link={`/${restaurantId}/menu/${menu.name
              .toLocaleLowerCase()
              .replace(/\s/g, "-")}`}
          />
        ))}
      </div>
    </div>
  );
}
