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
    <div className="flex flex-col">
      <div className="text-2xl font-bold">Menu</div>

      <div className="grid mt-4 md:grid-cols-4 grid-cols-2 gap-4">
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
