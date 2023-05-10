// pages/api/restaurants/menu/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../../data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, menuId } = req.query;
  const restaurant = data.find(
    (restaurantData) => restaurantData.Restaurant.subdomain === id
  );

  if (!restaurant) {
    return res.status(404).json({ message: "Restaurant not found." });
  }

  const menuItem = restaurant.Menu.find((menu) => menu._id === menuId);

  if (!menuItem) {
    return res.status(404).json({ message: "Menu item not found." });
  }

  res.status(200).json(menuItem);
}
