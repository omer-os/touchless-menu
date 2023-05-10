import MenuItemCard from "../../modules/cards/MenuItemCard";
import React from "react";

type MenuType = {
  title: string;
  img: string;
  price: string;
  link: string;
};

export default function MenuList({ menus }: { menus: MenuType[] }) {
  return (
    <div className="flex flex-col md:mt-0 mt-2">
      <div className="text-2xl font-bold">Menu</div>

      <div className="grid mt-4 xl:grid-cols-3 grid-cols-2 md:gap-4 gap-6">
        {menus.map((menu, index) => (
          <MenuItemCard
            key={menu.link + index}
            title={menu.title}
            img={menu.img}
            price={menu.price}
            link={menu.link}
          />
        ))}
      </div>
    </div>
  );
}
