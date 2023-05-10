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
  const menus = categoryname
    ? getCategoryBySubdomain(restaurantId, categoryname)
    : {
        items: [],
      };

  return (
    <div className="flex flex-col md:mt-3 mt-2">
      <div className="grid  xl:grid-cols-3 grid-cols-2 md:gap-4 gap-6">
        {menus?.items.length === 0 && (
          <div className="font-bold capitalize text-lg">select a category</div>
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
