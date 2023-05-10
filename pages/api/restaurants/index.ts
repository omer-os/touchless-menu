// pages/api/restaurants.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const restaurants = data.map((restaurantData) => restaurantData.Restaurant);
  res.status(200).json(restaurants);
}
