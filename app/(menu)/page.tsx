import { getAllRestaurants } from "@/lib/GetData";
import Link from "next/link";
import React from "react";

export default async function page() {
  const restaurants = getAllRestaurants();

  return (
    <div className="pt-6">
      <div className="text-2xl font-bold capitalize">Available restaurants</div>

      <ol className="mt-2 text-lg text-blue-500 underline list-decimal list-inside">
        {restaurants.map((restaurant) => (
          <li className="" key={restaurant._id}>
            <Link href={`/${restaurant.subdomain}/`}>{restaurant.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
