// pages/api/restaurants/categories.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../../data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const restaurant = data.find(
    (restaurantData) => restaurantData.Restaurant.subdomain === id
  );

  if (!restaurant) {
    return res.status(404).json({ message: "Restaurant not found." });
  }

  const categories = restaurant.Menu.flatMap((menu) => menu.categories).map(
    (category) => ({
      ...category,
      items: category.items.length,
    })
  );
  res.status(200).json(categories);
}
