// pages/api/restaurants/categories/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../../../data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, categoryId } = req.query;
  const restaurant = data.find(
    (restaurantData) => restaurantData.Restaurant.subdomain === id
  );

  if (!restaurant) {
    return res.status(404).json({ message: "Restaurant not found." });
  }

  const category = restaurant.Menu.flatMap((menu) => menu.categories).find(
    (cat) => cat.name === categoryId
  );

  if (!category) {
    return res.status(404).json({ message: "Category not found." });
  }

  res.status(200).json(category);
}
