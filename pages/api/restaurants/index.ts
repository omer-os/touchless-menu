// pages/api/restaurants.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(AllRestaurants);
}

export const AllRestaurants = data.map((restaurantData) => restaurantData.Restaurant);
